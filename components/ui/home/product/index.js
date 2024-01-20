import React, { useState } from "react";
import "./product.css";
import { MdPlayCircleOutline } from "react-icons/md";
import { useRouter } from "next/navigation";

const Product = ({ data }) => {
  const router = useRouter();

  const handleIdProduct = (id) => {
    router.push(`/details/${id}`);
  };
  return (
    <>
      <div className="product_color py-[50px]">
        <div className="container mx-auto ">
          <div class="grid grid-cols-6 gap-10 product">
            {data?.map((item) => (
              <>
                <div className="item" onClick={() => handleIdProduct(item.id)}>
                  <div className="overflow-hidden h-[300px] mb-[20px] rounded-[20px] ">
                    <div
                      className="box_image bg-center bg-cover  h-full "
                      style={{ backgroundImage: `url(${item.images[0]})` }}
                    >
                      <MdPlayCircleOutline className="icon_play" />
                    </div>
                  </div>
                  <div className="title text-white">
                    <p className="text-[17px]">{item.title}</p>
                    <p className="text-[12px]">{item.category}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
