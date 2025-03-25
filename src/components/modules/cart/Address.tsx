"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  addPrescriptionLink,
  addShippingAddress,
  citySelector,
  orderedMedicinesSelector,
  prescriptionLinkSelector,
  shippingAddressSelector,
} from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, { use, useState } from "react";

const Address = () => {
  const cartProducts = useAppSelector(orderedMedicinesSelector);
  const prescriptionLink = useAppSelector(prescriptionLinkSelector);
  const selectedCity = useAppSelector(citySelector);
  const shippingAddress = useAppSelector(shippingAddressSelector);

  const dispatch = useAppDispatch();

  
  const requiresPrescription = cartProducts.some(
    (item) => item.prescriptionRequired === "yes"
  );

  const handleCitySelect = (city: string) => {
    dispatch(addCity(city));
  };
  const handlePrescriptionLink = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(addPrescriptionLink(e.target.value));
    console.log(prescriptionLink);
  };

  const handleShippingAddress = (address: string) => {
    dispatch(addShippingAddress(address));
    console.log(selectedCity);
    console.log(shippingAddress);
    console.log(prescriptionLink);
  };

  return (
    <div className="  rounded-md  p-5 ">
      <div className="flex flex-col justify-between h-full">
        <h1 className="text-2xl font-bold">Address</h1>
        <p className="text-gray-500">Enter your address.</p>
        <div className="mt-5">
          <Select onValueChange={(city) => handleCitySelect(city)}>
            <SelectTrigger className="mb-5 rounded-none">
              <SelectValue placeholder="Select a city" className="rounded-none"/>
            </SelectTrigger>
            <SelectContent className="bg-slate-100 rounded-none">
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
            className="border-1 border-gray-500 rounded-none w-full"
          />

          {requiresPrescription && 
            <div className="grid w-full max-w-sm items-center gap-1.5 mt-6">
            <Input
              onChange={handlePrescriptionLink}
              type="text"
              placeholder="write your prescription link here"
              className="rounded-none"
            />
          </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Address;
