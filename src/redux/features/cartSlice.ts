import { IMedicine } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface CartProduct extends IMedicine {
  orderQuantity: number;
}

interface InitialState {
  medicines: CartProduct[];
  city: string;
  shippingAddress: string;
  prescriptionLink: string;
}

const initialState: InitialState = {
  medicines: [],
  city: "",
  shippingAddress: "",
  prescriptionLink: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addMedicine: (state, action) => {
      const medicineToAdd = state.medicines.find(
        (medicine) => medicine._id === action.payload._id
      );
      if (medicineToAdd) {
        medicineToAdd.orderQuantity += 1;
        return;
      }

      state.medicines.push({ ...action.payload, orderQuantity: 1 });
    },

    incrementOrderQuantity: (state, action) => {
      const productToIncrement = state.medicines.find(
        (medicine) => medicine._id === action.payload
      );
      if (productToIncrement) {
        productToIncrement.orderQuantity += 1;
      }
    },
    decrementOrderQuantity: (state, action) => {
      const productToIncrement = state.medicines.find(
        (medicine) => medicine._id === action.payload
      );
      if (productToIncrement && productToIncrement.orderQuantity > 1) {
        productToIncrement.orderQuantity -= 1;
      }
    },
    removeOrder: (state, action) => {
      state.medicines = state.medicines.filter(
        (medicine) => medicine._id !== action.payload
      );
    },
    addCity: (state, action) => {
      state.city = action.payload;
    },
    addShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
    },
    addPrescriptionLink: (state, action) => {
      state.prescriptionLink = action.payload;
    },
    clearCart: (state) => {
      state.medicines = [];
      state.city = "";
      state.shippingAddress = "";
      state.prescriptionLink = "";
    },
  },
});

export const orderedMedicinesSelector = (state: RootState) => {
  return state.cart.medicines;
};

//order

export const orderSelector = (state: RootState) => {
  return {
    products: state.cart.medicines.map((medicine) => ({
      product: medicine._id,
      quantity: medicine.orderQuantity,
      prescriptionLink:
        medicine.prescriptionRequired === "yes"
          ? state.cart.prescriptionLink
          : "No need",
    })),
    shippingAddress: `${state.cart.shippingAddress} - ${state.cart.city}`,
    paymentMethod: "Online",
  };
};

export const prescriptionLinkSelector = (state:RootState)=>{
  return state.cart.prescriptionLink
}


//payment
export const subTotalSelector = (state: RootState) => {
  return state.cart.medicines.reduce((acc, medicine) => {
    return acc + medicine.price * medicine.orderQuantity;
  }, 0);
};

export const grandTotalSelector = (state: RootState) => {
  const subTotal = subTotalSelector(state);
  const shippingCost = shippingCostSelector(state);

  return subTotal + shippingCost;
};

export const shippingCostSelector = (state: RootState) => {
  if (
    state.cart.city &&
    state.cart.city === "Dhaka" &&
    state.cart.medicines.length > 0
  ) {
    return 60;
  } else if (
    state.cart.city &&
    state.cart.city !== "Dhaka" &&
    state.cart.medicines.length > 0
  ) {
    return 120;
  } else {
    return 0;
  }
};

//address

export const citySelector = (state: { cart: InitialState }) => {
  return state.cart.city;
};
export const shippingAddressSelector = (state: { cart: InitialState }) => {
  return state.cart.shippingAddress;
};

export const {
  addMedicine,
  incrementOrderQuantity,
  decrementOrderQuantity,
  removeOrder,
  addCity,
  addShippingAddress,
  addPrescriptionLink,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
