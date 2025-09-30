import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const searchSlice = createSlice({
  name: "search",
  initialState: { value: "" },
  reducers: {
    setSearch: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const selectSearch = (state: RootState) => state.search.value;

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;
