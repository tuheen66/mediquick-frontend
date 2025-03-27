import React from "react";
import { FaRegClock } from "react-icons/fa6";

import Image from "next/image";
import about from "@/assets/images/about.png";
import { GoShieldCheck } from "react-icons/go";
import { LiaComments } from "react-icons/lia";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="font-sans bg-gray-100">
      {/* Hero Section */}
      <div className=" flex flex-col-reverse  lg:flex-row justify-between mx-auto">
        <div className=" flex flex-1 justify-center items-center bg-blue-100 ">
          <div className="mx-16 py-4 lg:p-0">
            <h1 className="text-3xl tracking-tight font-extrabold text-gray-800 sm:text-3xl md:text-4xl">
              <span className="block">About Mediquick</span>
              <span className="block text-orange-500">
                Your Health, Our Priority
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              We're revolutionizing how people access healthcare products with
              fast, reliable delivery and expert advice.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <Image src={about} alt="aboutImage" width={800} height={450} />
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-xl text-gray-800 font-semibold tracking-wide uppercase">
              Our Story
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-800 sm:text-4xl">
              From a simple idea to your trusted pharmacy
            </p>
          </div>

          <div className="mt-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <img
                  className=" shadow-xl"
                  src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Pharmacy store"
                />
              </div>
              <div className="md:w-1/2">
                <p className="mt-4 text-lg text-gray-600">
                  Founded in 2020 during the global health crisis, Mediquick
                  began with a simple mission: to make healthcare accessible to
                  everyone, especially those who couldn't leave their homes.
                  What started as a small local delivery service has grown into
                  a trusted online pharmacy serving thousands of customers
                  nationwide.
                </p>
                <p className="mt-4 text-lg text-gray-600">
                  Our founder, a pharmacist with over 15 years of experience,
                  saw the challenges people faced in accessing medications and
                  health products. This inspired the creation of Mediquick - a
                  platform that combines pharmaceutical expertise with the
                  convenience of e-commerce.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission and Values */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-xl text-gray-800 font-semibold tracking-wide uppercase">
              Our Mission & Values
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-800 sm:text-4xl">
              Why we do what we do
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6  shadow-md">
                <div className="flex items-center justify-center h-12 w-12  bg-blue-100 text-orange-500 text-xl">
                  <GoShieldCheck />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-800">
                  Quality Assurance
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  We source medications only from licensed manufacturers and
                  distributors, ensuring you receive genuine products every
                  time.
                </p>
              </div>

              <div className="bg-white p-6  shadow-md">
                <div className="flex items-center justify-center h-12 w-12  bg-blue-100 text-orange-500 text-xl">
                  <FaRegClock />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-800">
                  Fast Delivery
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  Our efficient logistics network ensures your medications
                  arrive when you need them, with same-day delivery options
                  available.
                </p>
              </div>

              <div className="bg-white p-6  shadow-md">
                <div className="flex items-center justify-center h-12 w-12  bg-blue-100 text-orange-500 text-xl">
                  <LiaComments />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-800">
                  Expert Advice
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  Our team of licensed pharmacists is available 24/7 to answer
                  your questions and provide professional guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-xl text-gray-800 font-semibold tracking-wide uppercase">
              Meet Our Team
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-800 sm:text-4xl">
              The people behind Mediquick
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                <img
                  className="mx-auto h-40 w-40 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                  alt="Dr. Sarah Johnson"
                />
                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">
                  Dr. Sarah Johnson
                </h3>
                <p className="mt-1 text-sm text-gray-800">
                  Chief Pharmacist & Founder
                </p>
                <p className="mt-2 text-base text-gray-600">
                  With over 15 years of clinical experience, Dr. Johnson ensures
                  all medications meet the highest standards.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                <img
                  className="mx-auto h-40 w-40 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                  alt="Michael Chen"
                />
                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">
                  Michael Chen
                </h3>
                <p className="mt-1 text-sm text-gray-800">
                  Operations Director
                </p>
                <p className="mt-2 text-base text-gray-600">
                  Logistics expert who ensures your orders are processed quickly
                  and delivered on time.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                <img
                  className="mx-auto h-40 w-40 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                  alt="Emily Rodriguez"
                />
                <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">
                  Emily Rodriguez
                </h3>
                <p className="mt-1 text-sm text-gray-800">
                  Customer Care Manager
                </p>
                <p className="mt-2 text-base text-gray-600">
                  Leads our support team to provide exceptional service and
                  address all your concerns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-gray-800 font-semibold tracking-wide uppercase">
              By The Numbers
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-800 sm:text-4xl">
              Mediquick in numbers
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="bg-white p-6  shadow-md text-center">
                <p className="text-5xl font-extrabold text-orange-500">
                  10,000+
                </p>
                <p className="mt-2 text-base text-gray-600">Happy Customers</p>
              </div>
              <div className="bg-white p-6  shadow-md text-center">
                <p className="text-5xl font-extrabold text-orange-500">500+</p>
                <p className="mt-2 text-base text-gray-600">
                  Healthcare Products
                </p>
              </div>
              <div className="bg-white p-6  shadow-md text-center">
                <p className="text-5xl font-extrabold text-orange-500">24/7</p>
                <p className="mt-2 text-base text-gray-600">Pharmacy Support</p>
              </div>
              <div className="bg-white p-6  shadow-md text-center">
                <p className="text-5xl font-extrabold text-orange-500">98%</p>
                <p className="mt-2 text-base text-gray-600">
                  On-Time Delivery Rate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-800 sm:text-4xl">
            <span className="block">
              Ready to experience the Mediquick difference?
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Join thousands of satisfied customers who trust us with their
            healthcare needs.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium  text-white bg-orange-500 hover:bg-orange-700"
              >
                Shop Now
              </Link>
            </div>
            <div className="ml-3 inline-flex">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-orange-500 text-base font-medium  text-orange-500  hover:bg-orange-500 hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
