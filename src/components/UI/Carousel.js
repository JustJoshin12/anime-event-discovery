import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

const SwiperConponent = ({children,data,}) => {
  return (
  <Swiper>
    {data.map()}
  </Swiper>
  )
}