"use client";
import Analog from "@/components/ui/analog";

import Hot from "@/components/ui/hot";
import Product from "@/components/ui/product";
import { useAppSelector } from "@/utils/hook";
import { getAllAction, selectProduct } from "@/utils/features/productSlice";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import Trending from "@/components/ui/trending";

const Home = () => {
  const dataProduct = useAppSelector(selectProduct);
  const { data } = dataProduct;
  const dispatch = useDispatch();
  const getAll = () => {
    dispatch(getAllAction());
  };
  useEffect(() => {
    getAll();
  }, []);
  return (
    <>
      <Hot data={data} />
      <Analog />
      <Product data={data} />
      <Trending data={data} />
    </>
  );
};

export default Home;

// export default function Home() {
//   // const currentTheme = useAppSelector((state) => state.theme.currentTheme);
//   // const dispatch = useAppDispatch();
//   // const handleDarkLight = () => {
//   //   dispatch(toggleTheme());
//   // };

// }
