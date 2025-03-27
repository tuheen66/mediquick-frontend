"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import MedicineCard from "@/components/medicineCard/MedicineCard";
import shop from "@/assets/images/shop_page.jpg";
import { IMedicine } from "@/types";
import { getAllMedicines } from "@/services/MedicineService";
import { Button } from "@/components/ui/button";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image";

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
  "Endocrine",
];

// Predefined prescription filter options
const prescriptionOptions = ["All", "Yes", "No"];

// Sorting options
const sortOptions = [
  { label: "Default", value: "" },
  { label: "Price: Low to High", value: "asc" },
  { label: "Price: High to Low", value: "desc" },
];

const Shop = () => {
  const [medicines, setMedicines] = useState<IMedicine[]>([]);
  const [filteredMedicines, setFilteredMedicines] = useState<IMedicine[]>([]);
  const [minPrice, setMinPrice] = useState(""); // Reset after reload
  const [maxPrice, setMaxPrice] = useState(""); // Reset after reload
  const [sortBy, setSortBy] = useState(""); // Sorting state
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const itemsPerPage = 8; // Number of items per page

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
        (med) =>
          med.prescriptionRequired.toLowerCase() ===
          selectedPrescription.toLowerCase()
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
  }, [
    selectedCategory,
    selectedPrescription,
    minPrice,
    maxPrice,
    sortBy,
    medicines,
  ]);

  // Update the URL with selected filters (excluding price and sorting)
  const handleFilterChange = (category: string, prescription: string) => {
    router.push(`?category=${category}&prescription=${prescription}`, {
      scroll: false,
    });
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredMedicines.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredMedicines.length / itemsPerPage);

  return (
    <div>
      <div className="relative w-full bg-black mb-12">
        <Image src={shop} alt="Contact Us" width={1400} height={400} />
        <div className="absolute  top-0 right-0 text-gray-900 bg-black opacity-50 w-full h-full "></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-white sm:text-4xl mb-3">
              Your Medicine Shop
            </h1>
            
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row  gap-2 justify-between mx-4">
        <div className="w-full lg:w-1/5">
          {/* Filters Section */}
          <div className="mb-4 flex flex-col md:flex-row lg:flex-col gap-4 flex-wrap justify-between  py-4 px-2  border border-gray-300">
            {/* Category Filter */}
            <div>
              <label className="mr-2  text-gray-700">Category:</label>
              <select
                className="p-1 border border-gray-300 text-gray-700"
                value={selectedCategory}
                onChange={(e) =>
                  handleFilterChange(e.target.value, selectedPrescription)
                }
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
              <label className="mr-2  text-gray-700">
                Prescription Required:
              </label>
              <select
                className="p-1 border border-gray-300 text-gray-700"
                value={selectedPrescription}
                onChange={(e) =>
                  handleFilterChange(selectedCategory, e.target.value)
                }
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
              <label className="mr-2  text-gray-700 mb-2">Price Range:</label>
              <div>
                <input
                  type="number"
                  placeholder="Min"
                  className="p-1 border border-gray-300 w-20 mr-2"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="p-1 border border-gray-300 w-20"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>
            </div>

            {/* Price Sorting Filter */}
            <div>
              <label className="mr-2  text-gray-700">Sort by Price:</label>
              <select
                className="p-1 border border-gray-300 text-gray-700 mt-2"
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
              className=" bg-orange-500 hover:bg-orange-700 text-white  rounded-none"
              onClick={() => {
                setMinPrice(""); // Reset min price
                setMaxPrice(""); // Reset max price
                setSortBy(""); // Reset sorting
                router.push(`?category=All&prescription=All`, {
                  scroll: false,
                }); // Reset other filters
              }}
            >
              Reset Filters
            </Button>
          </div>
        </div>

        {/* Medicine Grid */}
        <div className="w-full  lg:w-4/5 ">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {currentItems.map((medicine) => (
              <MedicineCard key={medicine._id} medicine={medicine} />
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-12">
            {/* Previous Button */}
            <Button
              className="mr-2"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              <FaLongArrowAltLeft />
            </Button>

            {/* Page Number Buttons */}
            {Array.from({ length: totalPages }, (_, index) => (
              <Button
                key={index + 1}
                className={`mx-1 ${
                  currentPage === index + 1
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </Button>
            ))}

            {/* Next Button */}
            <Button
              className="ml-2"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              <FaLongArrowAltRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
