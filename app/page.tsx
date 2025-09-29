import Card from "@/components/Card";
import { products } from "@/constants/data";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center p-3 gap-4">
        <div className="">
          <p className=" font-semibold text-[30px]">Products</p>
        </div>

        <div
          className="flex
         flex-wrap justify-center gap-4"
        >
          {products.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
