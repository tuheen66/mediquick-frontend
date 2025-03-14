"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import MedicineCard from "@/components/medicineCard/MedicineCard";

import { IMedicine } from "@/types";
import { getAllMedicines } from "@/services/MedicineService";
import { Button } from "@/components/ui/button";

// Predefined category list
const categories = [
  "All",
  "Painkiller",
  "Antibiotics",
  "Gastrointestinal",
  "Cardiovascular",
  "Supplements",
  "Allergy",
  "Diabetes",
];

// Predefined prescription filter options
const prescriptionOptions = ["All", "Yes", "No"];

// Sorting options
const sortOptions = [
  { label: "Default", value: "" },
  { label: "Price: Low to High", value: "asc" },
  { label: "Price: High to Low", value: "desc" },
];

const Shop1 = () => {
  const [medicines, setMedicines] = useState<IMedicine[]>([]);
  const [filteredMedicines, setFilteredMedicines] = useState<IMedicine[]>([]);
  const [minPrice, setMinPrice] = useState(""); // Reset after reload
  const [maxPrice, setMaxPrice] = useState(""); // Reset after reload
  const [sortBy, setSortBy] = useState(""); // Sorting state

  const searchParams = useSearchParams();
  const router = useRouter();

  // Get filters from URL query params
  const selectedCategory = searchParams.get("category") || "All";
  const selectedPrescription = searchParams.get("prescription") || "All";

  useEffect(() => {
    const fetchMedicines = async () => {
      const result = await getAllMedicines();
      setMedicines(result);
    };

    fetchMedicines();
  }, []);

  useEffect(() => {
    let filtered = medicines;

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((med) => med.category === selectedCategory);
    }

    // Filter by prescription requirement
    if (selectedPrescription !== "All") {
      filtered = filtered.filter(
        (med) => med.prescriptionRequired.toLowerCase() === selectedPrescription.toLowerCase()
      );
    }

    // Filter by price range
    if (minPrice) {
      filtered = filtered.filter((med) => med.price >= Number(minPrice));
    }
    if (maxPrice) {
      filtered = filtered.filter((med) => med.price <= Number(maxPrice));
    }

    // Apply sorting
    if (sortBy === "asc") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortBy === "desc") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    setFilteredMedicines(filtered);
  }, [selectedCategory, selectedPrescription, minPrice, maxPrice, sortBy, medicines]);

  // Update the URL with selected filters (excluding price and sorting)
  const handleFilterChange = (category: string, prescription: string) => {
    router.push(`?category=${category}&prescription=${prescription}`, { scroll: false });
  };

  return (
    <div className="container mx-auto p-4 ">
      {/* Filters Section */}
      <div className="mb-4 flex  gap-4 flex-wrap justify-between  py-4 px-2 bg-gray-200 rounded-xl">
        {/* Category Filter */}
        <div>
          <label className="mr-2 font-semibold text-gray-700">Category:</label>
          <select
            className="p-2 border rounded-md"
            value={selectedCategory}
            onChange={(e) => handleFilterChange(e.target.value, selectedPrescription)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Prescription Required Filter */}
        <div>
          <label className="mr-2 font-semibold text-gray-700">Prescription Required:</label>
          <select
            className="p-2 border rounded-md"
            value={selectedPrescription}
            onChange={(e) => handleFilterChange(selectedCategory, e.target.value)}
          >
            {prescriptionOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range Filter */}
        <div>
          <label className="mr-2 font-semibold text-gray-700">Price Range:</label>
          <input
            type="number"
            placeholder="Min"
            className="p-2 border rounded-md w-20 mr-2"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <input
            type="number"
            placeholder="Max"
            className="p-2 border rounded-md w-20"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>

        {/* Price Sorting Filter */}
        <div>
          <label className="mr-2 font-semibold text-gray-700">Sort by Price:</label>
          <select
            className="p-2 border rounded-md"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Reset Button */}
        <Button
          className=" bg-orange-500 text-white hover:bg-orange-800"
          onClick={() => {
            setMinPrice(""); // Reset min price
            setMaxPrice(""); // Reset max price
            setSortBy(""); // Reset sorting
            router.push(`?category=All&prescription=All`, { scroll: false }); // Reset other filters
          }}
        >
          Reset Filters
        </Button>
      </div>

      {/* Medicine Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-4">
        {filteredMedicines.map((medicine) => (
          <MedicineCard key={medicine._id} medicine={medicine} />
        ))}
      </div>
    </div>
  );
};

export default Shop1;
