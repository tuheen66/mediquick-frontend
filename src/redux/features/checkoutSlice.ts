import { RootState } from "../store";
import { createSlice } from '@reduxjs/toolkit';

type TTotalPrice = {
  totalPrice: number;
};

const initialState: TTotalPrice = {
  totalPrice:0
};

const checkoutSlice = createSlice({
  name: "totalPrice",
  initialState,
  reducers: {
    setTotalPrice: (state, action) => {
      const {totalPrice } = action.payload;
      state.totalPrice = totalPrice;
     
    },
    
  },
});

export const { setTotalPrice } = checkoutSlice.actions;
export default checkoutSlice.reducer;

export const useTotalPrice = (state: RootState) => state.checkout.totalPrice
