"use client";

import React, { useEffect } from "react";
import { MdPlayCircleOutline } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import "./details.css";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getByIdAction, selectProduct } from "@/utils/features/productSlice";

const Details = () => {
  const params = useParams();
  console.log(params.id);
  const dispatch = useDispatch();

  const getIdData = async () => {
    await dispatch(getByIdAction(params.id));
  };
  useEffect(() => {
    getIdData();
  }, []);
  // Route -> /shop/[tag]/[item]
  // URL -> /shop/shoes/nike-air-max-97
  // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }
  // const dataDetail = useSelector(selectProduct);
  // console.log(dataDetail);
  const dataDetail = useSelector(selectProduct);
  const { dataUpdate } = dataDetail;
  console.log(dataUpdate);

  return (
    <div className="details py-[50px]">
      <div className="container mx-auto">
        <div className="trailer flex items-center mb-[16px] ">
          <MdPlayCircleOutline className="icon_play w-[46px] h-[46px] text-white mr-[10px]" />
          <p className="text-white">Trailer</p>
        </div>
        <div className="title mb-[16px]">
          <p className="text-[36px] text-white mb-[10px]">{dataUpdate.title}</p>
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
        <p className="des w-[60%] text-white">{dataUpdate.description}</p>
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
