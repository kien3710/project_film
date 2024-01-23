import React, { useEffect } from "react";
import "./product.css";
import { MdPlayCircleOutline } from "react-icons/md";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";

const Product = ({ data }) => {
  const router = useRouter();

  const handleIdProduct = (id) => {
    router.push(`/details/${id}`);
  };

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
