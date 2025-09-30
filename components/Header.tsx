"use client";
import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useAppDispatch } from "@/app/store/hooks";
import { setSearch } from "@/app/store/searchSlice";

const Header = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="bg-gray-300 w-full h-[50px p-5 flex justify-between items-center">
        <div>
          <p className="font-semibold text-[20px]">eCOM</p>
        </div>

        <div>
          <input
            type="text"
            className="outline-none border-1 rounded-sm p-1 w-[450px] "
            placeholder="Search For Products"
            onChange={(e) => dispatch(setSearch(e.target.value))}
          />
        </div>

        <div>
          <ShoppingCart />
        </div>
      </div>
    </>
  );
};

export default Header;
