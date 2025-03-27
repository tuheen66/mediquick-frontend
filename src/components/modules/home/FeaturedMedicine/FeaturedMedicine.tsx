"use client";
import { useState, useEffect } from "react";
import MedicineCard from "@/components/medicineCard/MedicineCard";
import { featuredMedicine } from "@/services/MedicineService";
import { IMedicine } from "@/types";

const FeaturedMedicine = () => {
  const [allMedicines, setAllMedicines] = useState<IMedicine[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Fetch medicines on component mount
  useEffect(() => {
    const fetchMedicines = async () => {
      const { data } = await featuredMedicine();
      setAllMedicines(data);
    };
    fetchMedicines();
  }, []);

  // Function to handle search input changes
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Filter medicines based on name or category
  const filteredMedicines = allMedicines.filter((medicine: IMedicine) => {
    const query = searchQuery.toLowerCase();
    return (
      medicine.name.toLowerCase().includes(query) ||
      medicine.category.toLowerCase().includes(query)
    );
  });

  // Limit to 6 results for display
  const medicinesToDisplay = filteredMedicines.slice(0, 8);

  return (
    <div className="">
      <h2 className="text-3xl text-gray-800 font-bold text-center my-4">Featured Medicines</h2>

      {/* Search Bar */}
      <div className="mb-6 text-center p-4  ">
        <input
          type="text"
          placeholder="Search medicines by name or category"
          value={searchQuery}
          onChange={handleSearchChange}
          className="p-2 border bg-white border-gray-300 w-full md:w-1/2 lg:w-1/3"
        />
      </div>

      {/* Medicine Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-[90%] mx-auto">
        {medicinesToDisplay.map((medicine: IMedicine) => (
          <MedicineCard key={medicine._id} medicine={medicine} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedMedicine;
