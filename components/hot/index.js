import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./hot.css";
import "swiper/css";
import { useAppDispatch, useAppSelector } from "@/utils/hook";
import { getAllAction, selectProduct } from "@/utils/features/productSlice";
import { useDispatch } from "react-redux";
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
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((item) => (
          <>
            <SwiperSlide>
              <div className="hot_swiper">{item.title}</div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </section>
  );
}
