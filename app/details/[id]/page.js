import React from "react";
import { MdPlayCircleOutline } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import "./details.css";
import PlayVideo from "./playVideo";
const Details = () => {
  return (
    <div className="details py-[50px]">
      <div className="container mx-auto">
        <div className="trailer flex items-center mb-[16px] ">
          <MdPlayCircleOutline className="icon_play w-[46px] h-[46px] text-white mr-[10px]" />
          <p className="text-white">Trailer</p>
        </div>
        <div className="title mb-[16px]">
          <p className="text-[36px] text-white mb-[10px]">
            The Fast and the Furious
          </p>
          <ul className="rating flex text-white items-center">
            <li className=" flex items-center mr-[30px]">
              <CiStar className="text-[#2f80ed] w-[20px] h-[20px] mr-[5px]" />
              <p>9.7</p>
            </li>
            <li className=" flex items-center mr-[30px]">
              <p>Action</p>
            </li>
            <li className=" flex items-center mr-[30px]">
              <p>2021</p>
            </li>
            <li className=" flex items-center mr-[30px]">
              <p>1 h 42 min</p>
            </li>
            <li className=" flex items-center mr-[30px]">
              <p>16+</p>
            </li>
          </ul>
        </div>
        <p className="des w-[60%] text-white">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here, content here, making it
          look like readable English.
        </p>
        <div className="video">
          <div class="grid grid-cols-3 gap-4">
            <div class="col-span-2 h-[500px] bg-red-500">04</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
