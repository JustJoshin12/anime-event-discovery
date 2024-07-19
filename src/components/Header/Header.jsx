import NavBar from "../NavBar/NavBar";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { useSelector } from "react-redux";
import { FreeMode, Pagination } from "swiper/modules";
import { eventInfoList } from "@/src/utils/eventInfoList";
import { Card } from "../UI/EventCard";
import Button from "../UI/Button";

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
export const HeroSection = () => {
  
  return (
    <section className="flex-1">
      <AnimatePresence>
        <motion.header
          className="absolute inset-x-0 top-0 z-50"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={fancyFadeInVariant}
          custom={0}
        >
          <NavBar />
        </motion.header>

        <div className="relative isolate overflow-hidden pt-14">
          <Image
            alt=""
            src={HeroImage}
            width={100000}
            height={100000}
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
              >
                <h1 className="pt-4 sm:pt-0 text-5xl  font-black tracking-tight md:tracking-normal xl:tracking-wider text-galactic-lightElectricPurple md:text-6xl lg:text-7xl xl:text-8xl">
                  Anime Event <br /> Discovery 
                </h1>
                <Image
                  src={AnimeCollageImage}
                  alt=""
                  width={100000}
                  height={100000}
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
              >
                <h2 className="mt-4 font-bold font-[Special-Elite] text-xl xl:text-5xl leading-8 text-galactic-secondary">
                  "Discover the Anime World Near You"
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
              >
                <UpcomingEvents />
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatePresence>
    </section>
  );
};

const UpcomingEvents = () => {
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
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className="flex"
        >
          {eventInfoList.map((event, index) => {
            return (
              <SwiperSlide key={index} className="">
                <Card
                  key={event.id}
                  data={event}
                  imgSrc={event.imageUrl}
                  name={event.name}
                  description={event.description}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="mt-10 px-6 xl:px-10">
        <Button text="View all Upcoming Event" outlineColor="bg-galactic-secondary" />
      </div>
    </div>
  );
};
