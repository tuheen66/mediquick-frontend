"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cities } from "@/constants/cities";
import React from "react";

const Address = () => {
  return (
    <div className="  rounded-md  p-5 ">
      <div className="flex flex-col justify-between h-full">
        <h1 className="text-2xl font-bold">Address</h1>
        <p className="text-gray-500">Enter your address.</p>
        <div className="mt-5">
          <Select
          //   onValueChange={(city) => handleCitySelect(city)}
          >
            <SelectTrigger className="mb-5">
              <SelectValue placeholder="Select a city" />
            </SelectTrigger>
            <SelectContent>
              {cities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <textarea
            rows={5}
            className="border-1 border-gray-500 rounded-xl w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Address;
