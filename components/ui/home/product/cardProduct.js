import React from "react";
import { useRouter } from "next/navigation";

const CartProduct = ({ item }) => {
  const router = useRouter();

  const handleIdProduct = (id) => {
    router.push(`/details/${id}`);
  };
  return (
    <div className="cardProduct" onClick={() => handleIdProduct(item.id)}>
      <div className="card">
        <div
          className="card__img w-full h-[250px] bg-cover"
          style={{ backgroundImage: `url(${item.images[0]})` }}
        ></div>
        <div className="card__subtitle">Type of work</div>
        <div className="card__wrapper">
          <div className="card__title">{item.title}</div>
          <div className="card__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              style={{
                userSelect: "none",
                width: "100%",
                height: "100%",
                display: "inline-block",
                fill: "rgb(224, 223, 220)",
                flexShrink: 0,
                cursor: "auto",
              }}
              color="rgb(224, 223, 220)"
            >
              <g color="rgb(224, 223, 220)">
                <circle cx={128} cy={128} r={96} opacity="0.2" />
                <circle
                  cx={128}
                  cy={128}
                  r={96}
                  fill="none"
                  stroke="rgb(224, 223, 220)"
                  strokeMiterlimit={10}
                  strokeWidth={16}
                />
                <polyline
                  points="134.1 161.9 168 128 134.1 94.1"
                  fill="none"
                  stroke="rgb(224, 223, 220)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={16}
                />
                <line
                  x1={88}
                  y1={128}
                  x2={168}
                  y2={128}
                  fill="none"
                  stroke="rgb(224, 223, 220)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={16}
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
