import React from "react";

const Card = () => {
  return (
    <>
      <div className="w-[350px] h-[300px] bg-blue-300 rounded-lg flex flex-col justify-start  ">
        <div
          className=" p-3 rounded-t-lg bg-red-300 w-[350px]
        h-[170px]"
        >
          product image
        </div>
        {/* product details */}
        <div className="p-3">
          <div>
            <p className="font-semibold text-[17px]">Product name</p>
            <p className="text-gray-600">product description</p>
          </div>
          {/* product rating */}
          <div className="flex gap-1">
            <p>4.6</p>
            <p>(324 reviews)</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
