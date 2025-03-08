"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cities } from "@/constants/cities";
import {
  addCity,
  addShippingAddress,
  citySelector,
  shippingAddressSelector,
} from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, { use } from "react";

const Address = () => {
  const dispatch = useAppDispatch();
  const selectedCity = useAppSelector(citySelector);
  const shippingAddress = useAppSelector(shippingAddressSelector);

  const handleCitySelect = (city: string) => {
    dispatch(addCity(city));
  };

  const handleShippingAddress = (address: string) => {
    dispatch(addShippingAddress(address));
    console.log(selectedCity);
    console.log(shippingAddress);
  };

  return (
    <div className="  rounded-md  p-5 ">
      <div className="flex flex-col justify-between h-full">
        <h1 className="text-2xl font-bold">Address</h1>
        <p className="text-gray-500">Enter your address.</p>
        <div className="mt-5">
          <Select onValueChange={(city) => handleCitySelect(city)}>
            <SelectTrigger className="mb-5 ">
              <SelectValue placeholder="Select a city" />
            </SelectTrigger>
            <SelectContent className="bg-slate-100">
              {cities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Textarea
            onChange={(e) => handleShippingAddress(e.target.value)}
            rows={5}
            className="border-1 border-gray-500 rounded-xl w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Address;
