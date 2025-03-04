"use client";
import brand1 from "../../../../assets/images/brands/abbott.png";
import brand2 from "../../../../assets/images/brands/astrazeneca.png";
import brand3 from "../../../../assets/images/brands/bayer.png";
import brand4 from "../../../../assets/images/brands/gsk.png";
import brand5 from "../../../../assets/images/brands/johnson.png";
import brand6 from "../../../../assets/images/brands/novartis.png";
import brand7 from "../../../../assets/images/brands/pfizer.png";
import brand8 from "../../../../assets/images/brands/roche.png";
import brand9 from "../../../../assets/images/brands/sanofi.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/parallax";
import "swiper/css/autoplay";
import Image from "next/image";

const Brands = () => {
  return (
    <div className="mt-4 bg-gray-200 px-4 rounded-xl">
        
      <Swiper
        className="mySwiper "
        // install Swiper modules
        modules={[Autoplay, A11y]}
        spaceBetween={40}
        slidesPerView={5}
        loop={true}
        navigation
        autoplay
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <Image
            src={brand1}
            alt="brand1"
            width={300}
            height={300}
            className="w-36"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={brand2}
            alt="brand1"
            width={300}
            height={300}
            className="w-36"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={brand3}
            alt="brand1"
            width={100}
            height={100}
            className="mt-6"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={brand4}
            alt="brand1"
            width={300}
            height={300}
            className="w-36"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={brand5}
            alt="brand1"
            width={300}
            height={300}
            className="w-36"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={brand6}
            alt="brand1"
            width={300}
            height={300}
            className="w-36"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={brand7}
            alt="brand1"
            width={300}
            height={300}
            className="w-36"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={brand8}
            alt="brand1"
            width={300}
            height={300}
            className="w-36"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={brand9}
            alt="brand1"
            width={100}
            height={100}
            className=" w-28"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Brands;
