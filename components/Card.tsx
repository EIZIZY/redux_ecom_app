"use client";

import React from "react";
import { products } from "@/constants/data";
import { useAppSelector } from "@/app/store/hooks";
import { selectSearch } from "@/app/store/searchSlice";
import Products from "./Products";

const Card = () => {
  const searchItem = useAppSelector(selectSearch);

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <>
      {filteredProducts.map((item) => (
        <Products item={item} key={item.id} />
      ))}
    </>
  );
};

export default Card;
