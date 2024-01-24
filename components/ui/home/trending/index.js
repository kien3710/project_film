import React, { useRef, useEffect } from "react";
import "./trending.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdPlayCircleOutline } from "react-icons/md";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);
const Trending = ({ data }) => {
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);
  useEffect(() => {
    gsap.from(".box_trending", {
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: ".box_trending",
        start: "bottom +=200", // Start the animation when the trigger element is 80% in view
        end: "+=100", // End the animation 100 pixels after the trigger element
      },
    });
  }, []);
  return (
    <div className="container mx-auto">
      <div className="py-[50px]">
        <p className="text-white text-[36px] ">Trending</p>
        <div className="box_trending text-white relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            spaceBetween={30}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
          >
            {data.map((item) => (
              <>
                <SwiperSlide>
                  <div className="product_item">
                    <div className="item">
                      <div className="overflow-hidden h-[300px] mb-[20px] rounded-[20px] ">
                        <div
                          className="box_image bg-center bg-cover  h-full transition-all"
                          style={{ backgroundImage: `url(${item.images[0]})` }}
                        >
                          <MdPlayCircleOutline className="icon_play" />
                        </div>
                      </div>
                      <div className="title text-white text-center">
                        <p className="text-[17px]">{item.title}</p>
                        <p className="text-[12px]">{item.category}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            ))}
          </Swiper>

          <div
            className="w-[50px] h-[50px] bg-[#141f2f] flex justify-center items-center rounded-[50%] absolute top-[50%] right-[-70px] z-[10] translate-y-[-50%]"
            ref={navigationNextRef}
          >
            <FaLongArrowAltRight className="w-[25px] h-[25px]" />
          </div>
          <div
            className="w-[50px] h-[50px] bg-[#141f2f] flex justify-center items-center rounded-[50%] absolute top-[50%] left-[-70px] z-[10] translate-y-[-50%]"
            ref={navigationPrevRef}
          >
            <FaLongArrowAltLeft className="w-[25px] h-[25px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
