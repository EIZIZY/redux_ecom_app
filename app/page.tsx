import Card from "@/components/Card";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
        <div>
          <p className=" font-semibold text-[30px]">Products</p>
        </div>

        <Card/>
      </div>
    </>
  );
};

export default HomePage;
