"use client";

import { useEffect, useState } from "react";

type TReview = {
  name: string;
  review: string;
};

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/parallax";
import "swiper/css/autoplay";
import 'swiper/css/pagination';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/reviews.json");
        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-center mb-4">Customer Reviews</h2>

      <div>
        <Swiper
          className="mySwiper "
          
          modules={[Pagination, A11y]}
          spaceBetween={40}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {reviews.map((review: TReview, index: number) => (
            <SwiperSlide key={index}>
              <div className="p-4 bg-gray-200 rounded-xl  ">
                <h3 className="font-semibold">{review.name}</h3>
                <p className="text-gray-700 mt-2">{review.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
