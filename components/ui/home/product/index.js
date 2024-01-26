import React, { useEffect } from "react";
import "./product.css";
import { gsap } from "gsap";
import ListItem from "./listItem";

const Product = ({ data }) => {
  useEffect(() => {
    gsap.to(".product_color", {
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
    <>
      <div className="product_color py-[50px]">
        <div className="container mx-auto ">
          <div class="grid grid-cols-4 gap-10 product">
            <ListItem getData={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
