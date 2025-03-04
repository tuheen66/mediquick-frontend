import { IMedicine } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  medicines: IMedicine[];
}

const initialState: InitialState = {
  medicines: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
