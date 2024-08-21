import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { LoadingComponentAnimation } from "../../components/UI/LoadingComponent";
import { FailedApiComponent } from "../../components/UI/FailedComponent";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { Image } from "../../components/shared/image";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useState, useEffect } from "react";
import { fetchPopularEvents } from "../../store/slices/eventSlice";
import { useMediaQuery } from "react-responsive";

//Popular Events tablet and up

export const OppoScroll = () => {
  const dispatch = useDispatch();
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const popularEventsState = useSelector((state) => state.event.popularItems);
  const { status, events, error } = popularEventsState;
  useEffect(() => {
    dispatch(fetchPopularEvents());
  }, [dispatch]);
  console.log(popularEventsState);
  if (status === "loading") return <LoadingComponentAnimation />;
  if (status === "failed") return <FailedApiComponent error={error} />;

  return (
    <div>
      <h3 className="py-20 font-extrabold font-[Special-Elite] text-5xl xl:text-8xl text-galactic-darkGray text-center border-t-2 xl:mx-44">
        Popular Events
      </h3>
      <div className="text-black p-4 grid place-items-center">
        <FiArrowDown className="text-xl" />
      </div>
      <section ref={targetRef} className="flex bg-black text-white">
        <Content content={popularEventsState} />
        <Images
          content={popularEventsState}
          scrollYProgress={scrollYProgress}
        />
      </section>
      <div className=" text-white p-4 grid place-items-center">
        <FiArrowUp className="text-xl" />
      </div>
    </div>
  );
};

const Content = ({ content }) => {
  return (
    <div className="max-w-[50%]">
      {content.map(
        (
          {
            id,
            title,
            description,
            location,
            rating,
            categories,
            website,
            attendees,
          },
          idx
        ) => (
          <div
            key={id}
            className={`p-8 sm:p-10 xl:p-24 h-screen flex flex-col justify-between items-center space-y-6 ${
              idx % 2 ? "bg-white text-black" : "bg-black text-white"
            }`}
          >
            <div className="flex flex-col gap-4 font-bold text-center sm:text-left border-t border-b border-gray-300 py-4">
              <span>Location: {location}</span>
              <span>Rating: {rating}</span>
              <span>Attendance: {attendees}</span>
              <a href={website} className="text-galactic-primary">
                Website
              </a>
            </div>

            <h3 className="text-4xl xl:text-6xl font-semibold font-[Special-elite] text-center mt-6">
              {title}
            </h3>
            <p className="font-medium font-[Poppins-bold] text-center w-full max-w-lg">
              {description}
            </p>
          </div>
        )
      )}
    </div>
  );
};

const Images = ({ content, scrollYProgress }) => {
  const top = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${(content.length - 1) * 100}vh`, "0vh"]
  );

  return (
    <div className="h-screen overflow-hidden sticky top-0 w-full md:w-full">
      <motion.div style={{ top }} className="absolute left-0 right-0">
        {[...content].reverse().map(({ img, id, title }, index) => (
          <Image
            key={index}
            alt={title}
            width={1000000}
            height={1000000}
            className="h-screen w-full object-cover"
            src={img}
          />
        ))}
      </motion.div>
    </div>
  );
};

//Popular events mobile component

export const VerticalAccordion = () => {
  const dispatch = useDispatch();
  const {
    popularItems: events,
    status,
    error,
  } = useSelector((state) => state.event);
  const [open, setOpen] = useState(null);
  useEffect(() => {
    dispatch(fetchPopularEvents());
  }, [dispatch]);

  useEffect(() => {
    if (events.length > 0) {
      setOpen(events[0].id);
    }
  }, [events]);

  if (status === "loading") return <LoadingComponentAnimation />;
  // if (status === 'failed') return <FailedApiComponent error={error} />;

  return (
    <div>
      <div className="p-4 bg-indigo-600">
        <div className="flex flex-col lg:flex-row h-fit lg:h-[450px] w-full max-w-6xl mx-auto shadow overflow-hidden">
          {events.map((item) => {
            return (
              <Panel
                key={item.id}
                open={open}
                setOpen={setOpen}
                id={item.id}
                // Icon={item.Icon}
                title={item.title}
                imgSrc={item.img}
                description={item.description}
                link={item.website}
                location={item.location}
                rating={item.rating}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const panelVariants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "100%" },
};

const panelVariantsSm = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "100%" },
};

const descriptionVariants = {
  open: { opacity: 1, transition: { duration: 0.3 } },
  closed: { opacity: 0, transition: { duration: 0.3 } },
};

const Panel = ({
  open,
  setOpen,
  id,
  link,
  title,
  imgSrc,
  description,
  location,
  rating,
}) => {
  // Determine if the screen is a desktop or larger
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isOpen = open === id;

  return (
    <>
      <button
        className="bg-white hover:bg-slate-50 transition-colors p-3 border-r-[1px] border-b-[1px] border-slate-200 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
        onClick={() => setOpen(id)}
      >
        <span
          style={{
            writingMode: "vertical-lr",
          }}
          className="hidden lg:block text-xl font-light rotate-180"
        >
          {title}
        </span>
        <span className="block lg:hidden text-xl font-light">{title}</span>
        <div className="w-6 lg:w-full aspect-square bg-indigo-600 text-white grid place-items-center"></div>
        <span className="w-4 h-4 bg-white group-hover:bg-slate-50 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-slate-200 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={isDesktop ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full h-full overflow-hidden relative bg-black flex items-end"
          >
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="text-sm px-4 py-2 bg-black/40 backdrop-blur-sm text-white"
            >
              <p>{description}</p>
              <div className="flex justify-around py-2 text-xs">
                <a
                  href={link}
                  className="hover:text-galactic-softCyanGreen duration-200"
                >
                  Website
                </a>
                <p>{location}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
