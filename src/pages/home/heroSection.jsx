"use client";
import NavBar from "@/components/NavBar/NavBar";
import { Image } from "@/components/shared/image";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { eventInfoList } from "@/utils/eventInfoList";
import { Card } from "../../components/UI/EventCard";
import Button from "../../components/UI/OutLineButton";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUpcomingEvents } from "@/store/slices/eventSlice";
import { LoadingComponentAnimation } from "../../components/UI/LoadingComponent";
import { FailedApiComponent } from "../../components/UI/FailedComponent";
import SkeletonCard from "@/components/shared/skeletonCard";

const HeroImage = "/images/heroImage2.jpg";
const AnimeCollageImage = "/images/animeCharacter2.png";

const fancyFadeInVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.3, // 0.3 seconds delay between each item
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1],
    },
  }),
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.4, ease: [0.42, 0, 0.58, 1] },
  },
};

// Upcoming Events Component

export const UpcomingEvents = () => {
  const dispatch = useDispatch();
  const upcomingEventsState = useSelector((state) => state.event);
  // const upcomingEventsState = { status: "loading", upcomingItems: [], error: null };
  const { status, upcomingItems, error } = upcomingEventsState;

  useEffect(() => {
    dispatch(fetchUpcomingEvents());
  }, [dispatch]);

  if (status === "loading") {
    return (
      <div className="py-8">
        <h2 className="text-galactic-text text-3xl lg:text-5xl font-extrabold pb-16 text-center">
          Upcoming Events
        </h2>
        <div className="relative overflow-hidden px-6 min-[425px]:px-8  lg:px-6 xl:px-10">
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              425: {
                slidesPerView: 1.25,
                spaceBetween: 2,
              },
              640: {
                slidesPerView: 2.5,
                spaceBetween: 12,
              },

              800: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 2,
              },
            }}
            autoplay={{
              delay: 0, // 2.5 seconds delay between slides
              disableOnInteraction: false, // Continue autoplay after user interactions
            }}
            freeMode={true}
            speed={6000}
            loop={true}
            modules={[FreeMode, Pagination, Autoplay]}
            className="flex"
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <SwiperSlide key={index}>
                <SkeletonCard key={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    );
  }

  if (status === "failed") return <FailedApiComponent error={error} />;

  return (
    <div className="py-8 ">
      <h2 className="text-galactic-text text-3xl lg:text-5xl font-extrabold pb-16 text-center">
        Upcoming Events
      </h2>
      <div className="relative overflow-hidden px-6 min-[425px]:px-8  lg:px-6 xl:px-10">
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            425: {
              slidesPerView: 1.25,
              spaceBetween: 2,
            },
            640: {
              slidesPerView: 2.5,
              spaceBetween: 12,
            },

            800: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 2,
            },
          }}
          autoplay={{
            delay: 0, // 2.5 seconds delay between slides
            disableOnInteraction: false, // Continue autoplay after user interactions
          }}
          freeMode={true}
          speed={6000}
          loop={true}
          modules={[FreeMode, Pagination, Autoplay]}
          className="flex"
        >
          {upcomingItems.map((event, index) => {
            return (
              <SwiperSlide key={event._id || `event-${index}`}>
                <Card
                  key={event._id} // Ensure the key here is unique
                  data={event}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="mt-10 px-6 xl:px-10">
        <Button
          text="View all Upcoming Event"
          outlineColor="bg-galactic-secondary"
          bgColor="bg-galactic-softLavender/50"
        />
      </div>
    </div>
  );
};

// Hero Section Component

const HeroSection = () => {
  return (
    <div className="flex-1">
      <AnimatePresence>
        <motion.div
          className="absolute inset-x-0 top-0 z-50"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={fancyFadeInVariant}
          custom={0}
          key="1"
        >
          <NavBar />
        </motion.div>

        <div className="relative isolate overflow-hidden pt-14">
          <Image
            alt=""
            src={HeroImage}
            loading="eager"
            className="absolute inset-0 -z-10 h-full w-full object-cover"
            style={{ width: "100%", height: "100%" }}
          />
          <div className="mx-auto max-w-3xl xl:max-w-7xl py-32 sm:py-36">
            <div className="bg-galactic-background/80 p-4 xl:p-12 rounded-badge">
              <motion.div
                className="gap-8 md:gap-2 flex flex-col md:flex-row justify-evenly items-center"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={fancyFadeInVariant}
                custom={1}
                key="2"
              >
                <h1 className="pt-4 sm:pt-0 text-5xl  font-black tracking-tight md:tracking-normal xl:tracking-wider text-galactic-lightElectricPurple md:text-6xl lg:text-7xl xl:text-8xl">
                  Anime Event <br /> Discovery
                </h1>
                <Image
                  src={AnimeCollageImage}
                  alt=""
                  className="max-w-56 md:max-w-64 lg:max-w-90"
                />
              </motion.div>
              <motion.div
                className="py-8 flex flex-col text-center font-[Special-Elite]"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={fancyFadeInVariant}
                custom={2}
                key="3"
              >
                <h2 className="mt-4 font-bold font-[Special-Elite] text-xl xl:text-5xl leading-8 text-galactic-secondary">
                  &quot;Discover the Anime World Near You&quot;
                </h2>

                <p className="mt-4 md:px-20 font-semibold text-lg xl:text-xl leading-8 text-gray-300">
                  Discover exciting upcoming anime events near you, read
                  detailed reviews from fellow fans, and stay updated with the
                  latest anime news and releases. Stay with our vibrant
                  community today and never miss out on the anime action!
                </p>
              </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={fancyFadeInVariant}
                custom={3}
                key="4"
              >
                <UpcomingEvents />
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default HeroSection;
