import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./hot.css";
import "swiper/css";
export default function Hot() {
  return (
    <section className="hot_film">
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="hot_swiper"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hot_swiper"></div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="hot_swiper"></div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="hot_swiper"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hot_swiper"></div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
