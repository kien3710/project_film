import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./hot.css";
import "swiper/css";

import { CiStar } from "react-icons/ci";
import { GiSaveArrow } from "react-icons/gi";
import Link from "next/link";

export default function Hot({ data }) {
  return (
    <section className="hot_film px-[20px]">
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((item) => (
          <>
            <SwiperSlide>
              <Link href="#" className="sw">
                <div
                  className={`hot_swiper bg-cover bg-center flex flex-col p-[10px] justify-between`}
                  style={{ backgroundImage: `url(${item.images[0]})` }}
                >
                  <div className="feature flex justify-between items-center">
                    <div className="bg-[#131720] flex px-3 py-2 rounded-[15px]">
                      <GiSaveArrow className="text-[#2f80ed] w-[18px] h-[18px]" />
                    </div>
                    <div className="bg-[#131720] flex px-3 py-2 rounded-[15px] items-center">
                      <CiStar className="text-[#2f80ed] w-[18px] h-[18px] mr-[10px]" />
                      <p className="text-white">8.8</p>
                    </div>
                  </div>
                  <div className="title relative z-[5] text-white">
                    <p className="text-[30px]">{item.title}</p>
                    <p>{item.brand}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </section>
  );
}
