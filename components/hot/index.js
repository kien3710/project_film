import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./hot.css";
import "swiper/css";
import { useAppDispatch, useAppSelector } from "@/utils/hook";
import { getAllAction, selectProduct } from "@/utils/features/productSlice";
import { useDispatch } from "react-redux";
import { CiStar } from "react-icons/ci";

export default function Hot() {
  const dataProduct = useAppSelector(selectProduct);
  const { data } = dataProduct;
  console.log("data", data);
  const dispatch = useDispatch();
  const getAll = () => {
    dispatch(getAllAction());
  };
  useEffect(() => {
    getAll();
  }, []);
  return (
    <section className="hot_film">
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((item) => (
          <>
            <SwiperSlide>
              <div
                className={`hot_swiper bg-cover bg-center flex flex-col p-[10px] justify-between`}
                style={{ backgroundImage: `url(${item.images[0]})` }}
              >
                <div className="feature flex justify-between">
                  <div>lưu</div>
                  <div>
                    <CiStar />
                  </div>
                </div>
                <div className="title">
                  <p className="text-[30px] text-red-500">{item.title}</p>
                  <p>{item.brand}</p>
                </div>
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </section>
  );
}
