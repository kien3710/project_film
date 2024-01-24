"use client";
import { FaDownload } from "react-icons/fa6";

import React, { useEffect, useState } from "react";
import { MdPlayCircleOutline } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import "./details.css";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getByIdAction, selectProduct } from "@/utils/features/productSlice";
import Loading from "@/components/loading";
import ReactPlayer from "react-player";
import FormTrailer from "@/components/ui/details/formTrailer";

const Details = () => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [formTrailer, setFormTrailer] = useState(false);
  const dispatch = useDispatch();

  // get all data
  const getIdData = async () => {
    await dispatch(getByIdAction(params.id));
    setLoading(true);
  };
  // close form trailer
  const handleFormTrailer = () => {
    setFormTrailer(true);
  };
  useEffect(() => {
    getIdData();
  }, []);
  const dataDetail = useSelector(selectProduct);
  const { dataUpdate } = dataDetail;
  return (
    <>
      {loading ? (
        <>
          <FormTrailer
            formTrailer={formTrailer}
            closeFormTrailer={() => setFormTrailer(false)}
          />
          <div className="details py-[100px]">
            <div className="container mx-auto">
              <div
                className="trailer flex items-center mb-[16px] inline-flex"
                onClick={handleFormTrailer}
              >
                <MdPlayCircleOutline className="icon_play w-[46px] h-[46px] text-white mr-[10px]" />
                <p className="text-white">Trailer</p>
              </div>
              <div className="title mb-[16px]">
                <p className="text-[36px] text-white mb-[10px]">
                  {dataUpdate.title}
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
              <p className="des w-[60%] text-white mb-[50px]">
                {dataUpdate.description}
              </p>
              <div className="video w-[800px] h-[400px] rounded-[20px] overflow-hidden mb-[20px]">
                <ReactPlayer
                  width="100%"
                  height="100%"
                  controls={true}
                  url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                />
              </div>
              <div className="download flex items-center text-white mb-[2rem]">
                <FaDownload className="text-[#2f80ed] mr-[10px]" />
                <p className="mr-[15px]">Download:</p>
                <ul className="flex">
                  <li>480p</li>
                  <li>720p</li>
                  <li>1080p</li>
                  <li>4k</li>
                </ul>
              </div>
              <div className="continue"></div>
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Details;
