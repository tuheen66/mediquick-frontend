"use client";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IUser } from "@/types";
import Link from "next/link";
import Image from "next/image";

const ManageUsers = ({ users }: { users: IUser[] }) => {
  return (
    <div>
      <Table>
        <TableHeader className="font-bold">
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users?.map((user: IUser) => (
            <TableRow key={user._id}>
              <TableCell>
                <Image src={user.image} alt="image"  width={50} height={50}  />
                </TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.address}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.role}</TableCell>

              <TableCell>

                {user?.role==="customer" && <Link href={`/admin/users/${user._id}`}>
                  <Button className="bg-orange-600 text-white hover:bg-orange-800">Customer Order History
                  <FaLongArrowAltRight />
                  </Button>
                </Link>}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ManageUsers;
