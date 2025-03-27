
import UpdateProfile from "@/components/userProfile/UpdateProfile";
import { userProfile } from "@/services/AuthService";
import React from "react";

const UpdateProfilePage = async ({
  params,
}: {
  params: Promise<{ userId: string }>;
}) => {
  const { userId } = await params;

  const{data:user}= await userProfile(userId)

  return (
    <div>
      <UpdateProfile user={user}/>
    </div>
  );
};

export default UpdateProfilePage;
