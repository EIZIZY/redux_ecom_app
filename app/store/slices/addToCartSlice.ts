import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const addToCartSlice = createSlice({
  name: "addProduct",
  initialState: { value: "" },
  reducers: {
    addToCart: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const selectAddToCart = (state: RootState) => state.addProduct.value;

export const { addToCart } = addToCartSlice.actions;

export default addToCartSlice.reducer;
