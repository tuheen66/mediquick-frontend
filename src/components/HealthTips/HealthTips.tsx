"use client";

import { useState } from "react";
import health from "@/assets/images/health.jpg";
import Image from "next/image";


type HealthTip = {
  id: number;
  title: string;
  category: "Prevention" | "Nutrition" | "Fitness" | "Mental Health";
  content: string;
  date: string;
  isFeatured?: boolean;
};

const HealthTips = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const healthTips: HealthTip[] = [
    {
      id: 1,
      title: "Boosting Your Immune System Naturally",
      category: "Prevention",
      content:
        "Vitamin C, D, zinc, and proper sleep can significantly improve immune function. Consider adding citrus fruits and leafy greens to your diet.",
      date: "2023-10-15",
      isFeatured: true,
    },
    {
      id: 2,
      title: "The Mediterranean Diet Explained",
      category: "Nutrition",
      content:
        "Focus on whole grains, olive oil, fish, and nuts. This diet is clinically proven to support heart health and longevity.",
      date: "2023-11-02",
    },
    {
      id: 3,
      title: "10-Minute Home Workouts",
      category: "Fitness",
      content:
        "No equipment needed. Try bodyweight squats, push-ups, and planks in quick circuits for daily activity.",
      date: "2023-09-28",
    },
    {
      id: 4,
      title: "Mindfulness for Stress Reduction",
      category: "Mental Health",
      content:
        "Practice 5 minutes of deep breathing daily. Apps like Headspace can guide beginners through meditation techniques.",
      date: "2023-10-30",
      isFeatured: true,
    },
  ];

  const categories = ["All", ...new Set(healthTips.map((tip) => tip.category))];

  const filteredTips = healthTips.filter((tip) => {
    const matchesSearch =
      tip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tip.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || tip.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 mb-8">
      <div className="relative w-full bg-black">
        <Image src={health} alt="Contact Us" width={1400} height={400} />
        <div className="absolute  top-0 right-0 text-gray-900 bg-black opacity-40 w-full h-full "></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center lg:mb-10">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-white mb-3">
              Health & Wellness Guide
            </h1>
            <p className="text-md lg:text-lg text-white max-w-2xl mx-auto">
              Expert-curated advice for preventive care, nutrition, and holistic
              well-being
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[90%] mx-auto">
        {/* Search and Filter */}
        <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <input
                type="text"
                id="search"
                placeholder="Search tips (e.g. 'immune system')"
                className="w-full px-4 py-2 border border-gray-300   "
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="category" className="sr-only">
              Category
            </label>
            <select
              id="category"
              className="w-full px-4 py-2 border border-gray-300   "
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Featured Tips */}
        {filteredTips.some((tip) => tip.isFeatured) && (
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Featured Tips
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {filteredTips
                .filter((tip) => tip.isFeatured)
                .map((tip) => (
                  <div
                    key={tip.id}
                    className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-orange-100 text-orange-800">
                        {tip.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {new Date(tip.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {tip.title}
                    </h3>
                    <p className="text-gray-600">{tip.content}</p>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* All Tips */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            All Wellness Tips
          </h2>
          <div className="grid gap-6">
            {filteredTips.length > 0 ? (
              filteredTips.map((tip) => (
                <div
                  key={tip.id}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="inline-block px-2.5 py-0.5 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                      {tip.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {new Date(tip.date).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-gray-600">{tip.content}</p>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-900">
                  No tips found
                </h3>
                <p className="mt-1 text-gray-500">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthTips;
