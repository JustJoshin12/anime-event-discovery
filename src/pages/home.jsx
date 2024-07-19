"use-client";

import {
  AnimatePresence,
  MotionValue,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { FiArrowDown, FiArrowUp, FiCloudLightning } from "react-icons/fi";
import { useRef, useState, useEffect } from "react";
import { items } from "../utils/popularEventsData";
import { useMediaQuery } from "react-responsive";
import { animeNews } from "../utils/animeNews";
import Image from "next/image";
import { useRouter } from "next/router";
import { HeroSection } from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

///Main section for home page///

//Misson Section

const MissionSection = () => {
  const missionImage = "/images/missonImage2.jpg";

  return (
    <section className="py-24 xl:py-60">
      <div className="bg-gray-900 pb-20 sm:pb-24 xl:pb-0">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
          <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
            <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
              <Image
                alt="image"
                width={100000}
                height={100000}
                src={missionImage}
                className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
              />
            </div>
          </div>
          <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
            <figure className="relative isolate pt-6 sm:pt-12">
              <svg
                fill="none"
                viewBox="0 0 162 128"
                aria-hidden="true"
                className="absolute left-0 top-0 -z-10 h-32 stroke-white/20"
              >
                <path
                  d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                  id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                />
                <use x={86} href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" />
              </svg>
              <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                <p>
                  Gravida quam mi erat tortor neque molestie. Auctor aliquet at
                  porttitor a enim nunc suscipit tincidunt nunc. Et non lorem
                  tortor posuere. Nunc eu scelerisque interdum eget tellus non
                  nibh scelerisque bibendum.
                </p>
              </blockquote>
              <figcaption className="mt-8 text-base">
                <div className="font-semibold text-white">Judith Black</div>
                <div className="mt-1 text-gray-400">CEO of Workcation</div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

//Popular Events tablet and up

const OppoScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  return (
    <>
      <h3 className="py-20 font-extrabold font-[Special-Elite] text-5xl xl:text-8xl text-galactic-darkGray text-center border-t-2 xl:mx-44">
        Popular Events
      </h3>
      <div className="text-black p-4 grid place-items-center">
        <FiArrowDown className="text-xl" />
      </div>
      <section ref={targetRef} className="flex bg-black text-white">
        <Content content={items} />
        <Images content={items} scrollYProgress={scrollYProgress} />
      </section>
      <div className=" text-white p-4 grid place-items-center">
        <FiArrowUp className="text-xl" />
      </div>
    </>
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
            className={`p-8 sm:p-10 xl:p-24 h-screen flex flex-col justify-evenly items-center  ${
              idx % 2 ? "bg-white text-black" : "bg-black text-white"
            }`}
          >
            <h3 className="text-3xl xl:text-6xl font-semibold font-[Special-elite]">
              {title}
            </h3>
            <div className="hidden sm:flex flex-col gap-4 font-bold">
              <span>{location}</span>
              <span>Rating: {rating}</span>
              <span>Attendance: {attendees}</span>
              <a href={website} className="text-galactic-primary">
                website
              </a>
            </div>
            <p className="font-medium font-[Poppins-bold] w-full max-w-md">
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
        {[...content].reverse().map(({ img, id, title }) => (
          <Image
            key={id}
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

const MobileScroll = ({ items }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  return (
    <>
      <h3 className="py-10 font-extrabold font-[Special-Elite] text-3xl text-galactic-darkGray text-center border-t-2">
        Popular Events
      </h3>
      <div className="text-black p-2 flex justify-center">
        <FiArrowDown className="text-lg" />
      </div>
      <section ref={targetRef} className="flex flex-col bg-black text-white">
        {items.map((item, idx) => (
          <Event key={item.id} item={item} idx={idx} />
        ))}
      </section>
      <div className="text-white p-2 flex justify-center">
        <FiArrowUp className="text-lg" />
      </div>
    </>
  );
};

const Event = ({ item, idx }) => {
  return (
    <div className="h-screen flex flex-col">
      <MobileImages img={item.img} title={item.title} />
      <MobileContent item={item} idx={idx} />
    </div>
  );
};

const MobileContent = ({ item, idx }) => {
  return (
    <div
      className={`h-1/2 p-4 flex flex-col justify-evenly items-center ${
        idx % 2 ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <h3 className="text-2xl font-semibold font-[Special-Elite]">
        {item.title}
      </h3>
      <div className="flex flex-col gap-2 font-bold mt-2">
        <span>{item.location}</span>
        <span>Rating: {item.rating}</span>
        <span>Attendance: {item.attendees}</span>
        <a href={item.website} className="text-galactic-primary">
          website
        </a>
      </div>
      <p className="font-medium font-[Poppins-bold] max-w-xs mt-2 text-center">
        {item.description}
      </p>
    </div>
  );
};

const MobileImages = ({ img, title }) => {
  return (
    <div className="h-1/2 w-full">
      <Image
        alt={title}
        width={1000}
        height={1000}
        className="h-full w-full object-cover"
        src={img}
      />
    </div>
  );
};

//Lastest Anime Section

const ShimmerBorderCard = ({ news }) => {
  return (
    <div className="group relative mx-auto w-full  max-w-72 xl:max-w-80 overflow-hidden rounded-lg bg-slate-800 p-0.5 transition-all duration-500 hover:scale-[1.01] hover:bg-slate-800/50">
      <div className="relative h-full z-10 flex flex-col items-center justify-center overflow-hidden rounded-[7px] bg-slate-900 p-6 transition-colors duration-500 group-hover:bg-slate-800">
        <Image
          alt={news.title}
          src={news.imageUrl}
          width={1000000}
          height={1000000}
          className="max-h-36 rounded-[7px]"
        />
        <h4 className="relative z-10 my-4 w-full text-xl sm:text-2xl font-bold text-slate-50">
          {news.title}
        </h4>
        <p className="relative text-sm sm:text-base  z-10 text-slate-400">
          {news.description}
        </p>
        <span className="text-slate-50 text-xs mt-5">{news.source}</span>
      </div>

      <motion.div
        initial={{ rotate: "0deg" }}
        animate={{ rotate: "360deg" }}
        style={{ scale: 1.75 }}
        transition={{
          repeat: Infinity,
          duration: 3.5,
          ease: "linear",
        }}
        className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-200 via-indigo-200/0 to-indigo-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
    </div>
  );
};

const LatestAnimeNewsSection = () => {
  return (
    <div className="my-32">
      <h2 className="text-galactic-complementaryOrange text-5xl xl:text-8xl text-center py-14 border-t-2 xl:mx-44">
        Lastest News
      </h2>
      <ul className="grid grid-cols-1 gap-6 p-4 xl:p-16 sm:grid-cols-2 lg:grid-cols-4">
        {animeNews.map((news, index) => {
          return <ShimmerBorderCard news={news} key={index} />;
        })}
      </ul>
    </div>
  );
};

//Home Component

const Home = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <div className="bg-cosmic-5 flex flex-col">
      <HeroSection />
      <main>
        <MissionSection />
        {isMobile ? <span>Mobile</span> : <OppoScroll />}
        <LatestAnimeNewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
