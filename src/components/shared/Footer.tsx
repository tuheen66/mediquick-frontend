import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/images/logo1.jpg";
import { FaFacebookF,  FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="mt-12">
      <footer className="bg-slate-500">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="mb-6">
                <Link
                  href="/"
                  className="flex gap-2 items-center text-2xl font-bold"
                >
                  <Image
                    className="rounded-full"
                    src={logo}
                    width={60}
                    height={60}
                    alt="logo"
                  />
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-[#373840] to-orange-500 bg-clip-text text-transparent">
                    Mediquick
                  </h2>
                </Link>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                Connect
              </h3>
              <div className="mt-4 flex space-x-6">
                <a href="#" className="text-gray-200 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <FaFacebookF />
                </a>
                <a href="#" className="text-gray-200 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <BsInstagram />
                </a>
                <a href="#" className="text-gray-200 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <FaXTwitter />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                Shop
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Prescriptions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Over-the-counter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Wellness Products
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                Support
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Shipping Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Returns
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                Company
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-300 hover:text-white"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <p className="text-base text-gray-200">
                &copy; 2023 Mediquick. All rights reserved.
              </p>
            </div>
            <p className="mt-8 text-base text-gray-200 md:mt-0 md:order-1">
              Licensed pharmacy. All medications dispensed by licensed
              pharmacists.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
