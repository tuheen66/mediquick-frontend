export type IMedicine = {
  _id: string;
  name: string;
  image: string;
  category: string;
  price: number;
  quantity: number;
  description: string;
  manufacturerName: string;
  manufacturerDetails: string;
  prescriptionRequired: "yes" | "no";
  expiryDate: string;
  inStock: boolean;
};

export interface MedicinesResponse {
  medicines: IMedicine[];
  hasMore: boolean;
}

export type TCategories = {
  _id: string;
  name: string;
  icon: string;
  description: string;
};
