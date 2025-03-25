"use client";

import { useUser } from "@/context/UserContext";

import { useEffect, useState } from "react";
import { userProfile } from "@/services/AuthService";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import Link from "next/link";

const UserProfile = () => {
  const [currentUser, setCurrentUser] = useState<{
    name?: string | undefined;
    address?: string | undefined;
    role?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;
  }>({});
  const [loading, setLoading] = useState(false);

  const user = useUser();
  const userId = user?.user?.userId;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading

      try {
        const userData = await userProfile(userId as string);
        setCurrentUser(userData?.data || []);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user?.user?.userId]);

  return (
    <div className="">
      <div className="flex flex-col justify-center items-center my-20 space-y-4  shadow-xl shadow-slate-600 p-4 lg:w-1/2 mx-auto ">
        <h2 className="text-xl lg:text-3xl text-gray-800">
          Welcome back <span className="font-bold">{currentUser?.name}</span>
        </h2>
        <p className="text-xl lg:text-3xl text-gray-800">
          Address: <span className="font-bold">{currentUser?.address}</span>
        </p>
        <p className="text-xl lg:text-3xl text-gray-800">
          Phone: <span className="font-bold">{currentUser?.phone}</span>
        </p>
        <p className="text-xl lg:text-3xl text-gray-800">
          Email: <span className="font-bold">{currentUser?.email}</span>
        </p>
      </div>
      <div className="flex justify-center">
        <Link href={`/profile/${userId}`}>
          <Button className="bg-orange-600 text-white rounded-none hover:bg-orange-800 cursor-pointer">
            Update your profile
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default UserProfile;
