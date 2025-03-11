import ManageUsers from "@/components/modules/users/ManageUsers";
import { getAllUsers } from "@/services/AuthService";
import React from "react";

const UserManagementPage = async () => {
  const { data: users } = await getAllUsers();

  return (
    <div>
      User Management Page
      <div>
        <ManageUsers users={users} />
      </div>
    </div>
  );
};

export default UserManagementPage;
