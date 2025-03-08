"use client";

import { useUser } from "@/context/UserContext";

const UserProfile = () => {
  const user = useUser();
  console.log(user);

  return (
    <div className="flex flex-col justify-center items-center my-20 space-y-4 border-2 border-orange-500 shadow-xl shadow-slate-600 p-4 w-fit mx-auto rounded-xl ">
      <h2 className="text-3xl text-gray-800">
        Welcome back <span className="font-bold">{user?.user?.name}</span>
      </h2>
      <p className="text-3xl text-gray-800">
        Email: <span className="font-bold">{user?.user?.email}</span>
      </p>
      <p className="text-3xl text-gray-800">
        Role: <span className="font-bold">{user?.user?.role}</span>
      </p>
    </div>
  );
};

export default UserProfile;
