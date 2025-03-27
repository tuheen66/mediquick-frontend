"use client";

import { useEffect, useState } from "react";

type TReview = {
  name: string;
  image: string;
  review: string;
};

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/parallax";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import Image from "next/image";
import { getAllReviews } from "@/services/ReviewService";
import { TReviews } from "@/types/review";

const Reviews = () => {
  const [reviews, setReviews] = useState<TReviews[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const { data } = await getAllReviews();
      setReviews(data);
    };
    fetchReviews();
  }, []);

  return (
    <div className="my-12 ">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Customer Reviews
      </h2>

      <div className="w-[90%] mx-auto">
        <Swiper
          className="mySwiper "
          modules={[Pagination, A11y]}
          spaceBetween={40}
          slidesPerView={2}
          loop={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <div className=" ">
            {reviews.map((review: TReview, index: number) => (
              <SwiperSlide key={index}>
                <div className="p-4  border-1 border-gray-300 mx-1  ">
                  <div className="flex gap-3 items-center mb-2">
                    <Image
                      className="rounded-full"
                      src={review.image}
                      alt="image"
                      width={70}
                      height={70}
                    />
                    <h3 className="font-semibold text-lg text-gray-800">
                      {review.name}
                    </h3>
                  </div>

                  <div>
                    <FaQuoteLeft className="inline mr-2 text-orange-500 text-3xl" />
                    <p className="text-gray-700 mt-2 inline">{review.review}</p>
                    <FaQuoteRight className="inline ml-2 text-orange-500 text-3xl" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
