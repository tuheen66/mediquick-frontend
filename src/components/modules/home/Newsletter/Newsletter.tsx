"use client";

import Link from "next/link";
import React, { useState } from "react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    form.reset();

    toast.success("Subscription added successfully");
    setEmail("");
  };

  const handleSubscription = () => {
    toast.success("Subscription added successfully");
    
  };

  return (
    <div>
      {/* Newsletter */}
      <div className=" rounded-xl p-8 mt-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Get Weekly Wellness Tips
          </h2>
          <p className="text-gray-600 mb-6">
            Sign up for our newsletter to receive expert health advice straight
            to your inbox
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              className="flex-grow px-4 py-2  border border-gray-300  "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Link href="/">
              <button
                onClick={handleSubscription}
                type="submit"
                className="px-6 py-2 bg-orange-500 text-white font-medium hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Subscribe
              </button>
            </Link>
          </form>
          <p className="mt-3 text-xs text-gray-500">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
