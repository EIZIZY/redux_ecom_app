"use client";

import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Products = ({ item }) => {
  const { id, name, price, image, description, rating, reviews } = item;

  const addToCart = () => {
    console.log(id);
  };
  return (
    <>
      <div className="w-[350px] bg-gray-300  rounded-lg flex flex-col justify-start  ">
        <div
          className=" p-3 rounded-t-lg  
        "
        >
          <Image alt="" src={image} width={350} height={180} />
        </div>
        {/* product details */}
        <div className="p-3 flex flex-col gap-4">
          <div>
            <p className="font-semibold text-[17px]">{name}</p>
            <p className="text-gray-600">{description}</p>
          </div>
          {/* product rating */}
          <div className="flex gap-1">
            <p>{rating}</p>
            <p>({reviews} reviews)</p>
          </div>

          {/* price and add to cart */}

          <div className="flex justify-between">
            <p className="font-semibold text-[18px]">{price}</p>
            <Button onClick={addToCart} className="cursor-pointer">
              add to cart
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
