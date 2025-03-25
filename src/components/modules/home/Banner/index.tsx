"use client";
import hero1 from "@/assets/images/hero/hero1.jpg";
import hero2 from "@/assets/images/hero/hero2.jpg";
import hero3 from "@/assets/images/hero/hero3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/parallax";
import "swiper/css/autoplay";
import Image from "next/image";

const Banner = () => {
  return (
    <div>
      <Swiper
        className="mySwiper "
        // install Swiper modules
        modules={[Autoplay, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        navigation
        autoplay
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <Image
            src={hero1}
            alt="hero1"
            width={1200}
            height={600}
            className="w-full relative"
          />

          <div className="absolute  top-0 right-0 text-gray-900 bg-black opacity-30 w-full h-full "></div>
          <div className="absolute top-[70%] lg:left-[25%] text-white space-y-4 text-center invisible md:visible">
            <h2 className=" md:text-4xl lg:text-5xl font-bold">Reliable</h2>
            <p className="text-xl">
              Your trusted partner for genuine medicines, delivered to your
              doorstep
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={hero2}
            alt="hero2"
            width={1200}
            height={600}
            className="w-full"
          />
          <div className="absolute  top-0 right-0 text-gray-900 bg-black opacity-30 w-full h-full "></div>
          <div className="absolute top-[70%] lg:left-[25%] text-white space-y-4 text-center invisible md:visible">
            <h2 className=" md:text-4xl lg:text-5xl font-bold">Affordable</h2>
            <p className="text-xl">
              Quality healthcare at your fingertips, without breaking the bank
              for every age
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={hero3}
            alt="hero3"
            width={1200}
            height={600}
            className="w-full "
          />
          <div className="absolute  top-0 right-0 text-gray-900 bg-black opacity-30 w-full h-full "></div>
          <div className="absolute top-[70%] lg:left-[25%] text-white space-y-4 text-center invisible md:visible">
            <h2 className=" md:text-4xl lg:text-5xl font-bold">Convenient</h2>
            <p className="text-xl">
              Order prescriptions online, anytime, with fast and hassle-free
              delivery
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
