"use client";
import "./main.css";
import Link from "next/link";
import { FaSignInAlt } from "react-icons/fa";
import Search from "@/components/search";
import { useEffect } from "react";
import Hot from "@/components/hot";

import React from "react";

const Home = () => {
  return (
    <>
      <div className="container mx-auto ">
        <header className="flex justify-between items-center text-white">
          <div className="logo">LOGO</div>
          <ul className="menu flex">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">Catalog</Link>
            </li>
            <li>
              <Link href="#">Pricing plans</Link>
            </li>
            <li>
              <Link href="#">LIVE</Link>
            </li>
            <li>
              <Link href="#">...</Link>
            </li>
          </ul>
          <div className="feature flex items-center">
            <div className="search_page relative pr-[20px]">
              <Search />
            </div>
            <div className="login flex items-center">
              Sign in
              <FaSignInAlt className="pl-[10px] w-[24px] h-[24px]" />
            </div>
          </div>
        </header>
      </div>
      <Hot />
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
