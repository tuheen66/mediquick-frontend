"use client";

import Image from "next/image";
import contact from "@/assets/images/contact.jpg";
import { toast } from "sonner";
import Link from "next/link";

const ContactUs = () => {
 
  const handleMessage = () => {
    toast.success("Message sent successfully");
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full bg-black">
        <Image src={contact} alt="Contact Us" width={1400} height={400} />
        <div className="absolute  top-0 right-0 text-gray-900 bg-black opacity-30 w-full h-full "></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-xl md:text-2xl lg:text-4xl font-bold">Contact Us</h1>
        </div>
      </div>

      {/* Contact Info & Form Section */}
      <div className="grid md:grid-cols-3 justify-center gap-8 p-10">
        {/* Map & Info */}
        <div>
          <iframe
            className="w-full h-64 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531531663!3d-37.81627974202171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf4cba9faaf2c0c00!2sMelbourne%20CBD%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sus!4v1632385290242!5m2!1sen!2sus"
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>

        <div className="mx-auto">
          <h2 className="text-2xl font-semibold">Meet Us</h2>
          <p className="mt-2 flex items-center">
            <span className="mr-2">📞</span> +466723723666
          </p>
          <p className="mt-2 flex items-center">
            <span className="mr-2">✉️</span> contact@admin.com
          </p>
          <p className="mt-2 flex items-center">
            <span className="mr-2">📍</span> 1784 Griffin Street, Alabama
          </p>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold">Contact</h2>
          <form className="mt-6 space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full p-3 border-1 border-gray-300 "
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="w-full p-3 border-1 border-gray-300 "
            />
            <textarea
              placeholder="Message"
              name="message"
              className="w-full p-3 border-1 border-gray-300"
              rows={4}
            ></textarea>
            <Link href="/">
              <button
                onClick={handleMessage}
                type="submit"
                className="px-6 py-2 bg-orange-500 text-white  hover:bg-orange-700"
              >
                Send
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
