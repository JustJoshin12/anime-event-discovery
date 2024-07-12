"use client";
import { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import { eventInfoList } from "@/src/utils/eventInfoList";
import { Card } from "../UI/EventCard";

const HeroImage = "/images/heroImage2.jpg";

export const HeroSection = () => {
  return (
    <div className="bg-gray-900 flex-1">
      <header className="absolute inset-x-0 top-0 z-50">
        <NavBar />
      </header>

      <div className="relative isolate overflow-hidden pt-14">
        <Image
          alt=""
          src={HeroImage}
          width={100000}
          height={100000}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          style={{ width: "100%", height: "100%" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl xl:max-w-7xl py-32 sm:py-48 px-4">
          <div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-galactic-primary/90 sm:text-6xl xl:text-8xl">
                Anime Event <br /> Discovery
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
            </div>
            <UpcomingEvents/>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
};


const UpcomingEvents = () => {
  return (
    <div className="pt-4">
              <h2 className="text-galactic-text text-4xl font-extrabold pb-2">
                Upcoming Events
              </h2>
              <Swiper
                breakpoints={{
                  340: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  425: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  640: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },

                  800: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                  1200: {
                    slidesPerView: 5,
                    spaceBetween: 10,
                  },
                }}
                freeMode={true}
                pagination={{ clickable: true }}
                modules={[FreeMode, Pagination]}
                className="ml-7"
              >
                {eventInfoList.map((event, index) => {
                  return (
                    <SwiperSlide key={index} className="w-[50%]">
                      <Card
                        key={event.id}
                        imgSrc={event.imageUrl}
                        name={event.name}
                        description={event.description}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
  )
}