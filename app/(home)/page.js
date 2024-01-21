"use client";
import Analog from "@/components/ui/home/analog";

import Hot from "@/components/ui/home/hot";
import Product from "@/components/ui/home/product";
import { useAppSelector } from "@/utils/hook";
import { getAllAction, selectProduct } from "@/utils/features/productSlice";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import Trending from "@/components/ui/home/trending";
import Loading from "@/components/loading";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const dataProduct = useAppSelector(selectProduct);

  const { data } = dataProduct;
  const dispatch = useDispatch();
  const getAll = async () => {
    await dispatch(getAllAction());
    setLoading(true);
  };
  useEffect(() => {
    getAll();
  }, []);
  return (
    <>
      {loading ? (
        <>
          <Hot data={data} />
          <Analog />
          <Product data={data} />
          <Trending data={data} />
        </>
      ) : (
        <Loading />
      )}
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
