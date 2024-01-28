import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { CiPlay1 } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

import "./hot.css";
import "swiper/css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useState } from "react";
import { Autoplay, Thumbs, Navigation } from "swiper/modules";

export default function Hot({ data }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);
  useEffect(() => {
    gsap.to(".thumbs", {
      opacity: 1,
      // y: -100,
      duration: 1,
      // scrollTrigger: {
      //   trigger: ".thumbs",
      //   start: "top bottom", // Adjust the start position as needed
      //   end: "bottom center", // Adjust the end position as needed
      // },
    });
    gsap.set(".title_hot", { opacity: 0 });
    gsap.to(".title_hot", {
      opacity: 1,
      left: 50,
      duration: 1,
      // onComplete: () => gsap.set(".title_hot", { opacity: 1 }),
    });
  }, []);
  return (
    <section className="hot_film h-[100vh]">
      <div className="main ">
        <Swiper
          className="mb-5 "
          modules={[Thumbs, Autoplay, Navigation]}
          // autoplay={{ delay: 300 }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          thumbs={{ swiper: thumbsSwiper }}
        >
          {data?.map((item) => (
            <>
              <SwiperSlide>
                <div
                  className="box_img sw  bg-cover bg-center overflow-hidden  w-full h-[100vh] relative"
                  style={{
                    backgroundImage: `url('${item.images[0]}')`,
                  }}
                >
                  <div className="title_hot  w-[800px] h-[auto] text-white ">
                    <div className="text">
                      <p className="text-[50px] mb-[10px] font-bold leading-[70px]">
                        {item.title}
                      </p>
                      <p className="mb-[10px] font-bold">{item.brand}</p>
                      <p className="mb-[10px] font-bold">2HRS 16 MIN</p>
                      <p className=" mb-[30px]">{item.description}</p>
                    </div>
                    <div className="btnHot">
                      <button>TRAILER</button>
                      <button>XEM PHIM</button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>

      <div className="thumbs">
        <Swiper
          modules={[Thumbs, Autoplay]}
          autoplay={{ delay: 2000 }}
          watchSlidesProgress
          onSwiper={setThumbsSwiper}
          // slidesPerView={7}
          spaceBetween={30}
          breakpoints={{
            768: {
              // width: 768,
              slidesPerView: 3,
            },
          }}
        >
          {data?.map((item) => (
            <>
              <SwiperSlide>
                <div className="box_thumb cursor-pointer rounded-[25px] overflow-hidden w-full h-[350px]  relative">
                  <div
                    className="box_img  bg-cover bg-center w-full h-full"
                    style={{
                      backgroundImage: `url('${item.images[0]}')`,
                    }}
                  >
                    <CiPlay1 className="w-[40px] h-[40px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white ciPlay opacity-0" />
                  </div>
                </div>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
      {/* button */}
      <div className="btnActionLeft" ref={navigationPrevRef}>
        <FaArrowLeft />
      </div>
      <div className="btnActionRight" ref={navigationNextRef}>
        <FaArrowRight />
      </div>
    </section>
  );
}
