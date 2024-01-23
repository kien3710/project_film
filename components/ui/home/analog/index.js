import React, { useEffect } from "react";
import "./analog.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Analog = () => {
  useEffect(() => {
    gsap.to(".analog", {
      opacity: 1,
      y: -10,

      duration: 1,
      scrollTrigger: {
        y: -10,
        trigger: ".analog",
        start: "top bottom", // Adjust the start position as needed
        end: "bottom center", // Adjust the end position as needed
      },
    });
  }, []);
  return (
    <div className="container mx-auto mt-[70px]">
      <div className="analog my-[20px] px-[20px] py-[30px] bg-[#141f2f]  rounded-b-[20px] flex justify-between items-center">
        <div className="feature">
          <select
            name=""
            id=""
            className="text-white bg-transparent w-auto outline-0 mr-[20px]"
          >
            <option value="">All genrers</option>
            <option value="">Action/Adventure</option>
          </select>
          <select
            name=""
            id=""
            className="text-white bg-transparent w-auto outline-0 min-w-[50px]"
          >
            <option value="">All genrers</option>
            <option value="">Action/Adventure</option>
          </select>
        </div>
        <div className="popular bg-[#131720] text-white py-[5px] px-[10px] rounded-[20px]">
          <ul>
            <li>Featured</li>
            <li>Popular</li>
            <li>Newest</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Analog;
