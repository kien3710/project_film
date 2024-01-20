import React from "react";
import Link from "next/link";
import { FaSignInAlt } from "react-icons/fa";
import Search from "@/components/ui/home/search";
import "./header.css";

const Header = () => {
  return (
    <div className="container mx-auto ">
      <header className="flex justify-between items-center text-white">
        <div className="logo">LOGO</div>
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
            <div className="login flex items-center">
              Sign in
              <FaSignInAlt className="pl-[10px] w-[24px] h-[24px]" />
            </div>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
