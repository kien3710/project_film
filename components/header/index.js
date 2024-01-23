"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaSignInAlt } from "react-icons/fa";
import Search from "@/components/ui/home/search";
import "./header.css";
import DarkLight from "../darkLight";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY >= 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="container mx-auto ">
      <header
        className={
          isScrolled
            ? "flex justify-between items-center text-white header_sticky"
            : "flex justify-between items-center text-white "
        }
      >
        <div className="logo">
          <Link href="/">KN</Link>
        </div>
        <ul className="menu flex">
          <li>
            <Link href="/">Home</Link>
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
          <Link href="/login">
            <div className="login flex items-center mr-[15px]">
              Sign in
              <FaSignInAlt className="pl-[10px] w-[24px] h-[24px]" />
            </div>
          </Link>
          <div className="darkLight">
            <DarkLight />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
