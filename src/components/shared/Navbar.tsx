"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FiShoppingCart } from "react-icons/fi";
import logo from "../../assets/images/logo1.jpg";
import Image from "next/image";
import { Button } from "../ui/button";
import { useUser } from "@/context/UserContext";
import { logout } from "@/services/AuthService";
import { protectedRoutes } from "@/constants";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { AlignVerticalJustifyStart, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Navbar = () => {
  const { user, setIsLoading } = useUser();
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    setIsLoading(true);

    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };

  return (
    <div className=" bg-gray-200  text-slate-700 py-2 shadow-xl sticky top-0 z-10  px-[5%]">
      <div className="flex flex-col lg:flex-row gap-2 justify-between items-center">
        <div>
          <Link href="/" className="flex gap-2 items-center text-2xl font-bold">
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

        <nav className="    flex-wrap justify-between items-center space-x-4 lg:gap-12">
          <Link
            href="/shop"
            className={
              pathname === "/shop"
                ? " text-orange-500 font-semibold   "
                : "hover:text-slate-500 hover:underline"
            }
          >
            Shop
          </Link>
          <Link
            href="/profile"
            className={
              pathname === "/profile"
                ? " text-orange-500 font-semibold   "
                : "hover:text-slate-500 hover:underline"
            }
          >
            Profile
          </Link>

          <Link
            href="/orders"
            className={
              pathname === "/orders"
                ? " text-orange-500 font-semibold   "
                : "hover:text-slate-500 hover:underline"
            }
          >
            Orders
          </Link>

          {user?.role === "admin" && (
            <Link
              href="/admin"
              className={
                pathname === "/admin"
                  ? " text-orange-500 font-semibold  "
                  : "hover:text-slate-500 hover:underline"
              }
            >
              Dashboard
            </Link>
          )}
        </nav>

        <div className="flex justify-center items-center gap-4">
          <Link href="/cart">
            <FiShoppingCart className="text-xl" />
          </Link>

          {/* {user ? (
            <>
              <p>{user?.email}</p>
              <Button
                onClick={handleLogout}
                className="bg-orange-500 hover:bg-orange-800 text-white cursor-pointer rounded-none"
              >
                Logout
              </Button>
            </>
          ) : (
            <Link href="/login">
              <Button className="bg-orange-500  text-white  hover:bg-orange-800 cursor-pointer rounded-none ">
                Login
              </Button>
            </Link>
          )} */}
          {user ? (
            <>
              
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <AlignVerticalJustifyStart className="rounded-full">
                    <Avatar className="rounded-full">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>User</AvatarFallback>
                    </Avatar>
                  </AlignVerticalJustifyStart>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href={`/${user?.role}/dashboard`}>Dashboard</Link>
                  </DropdownMenuItem>
                  
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="bg-orange-500 text-white rounded-none cursor-pointer"
                    onClick={handleLogout}
                  >
                    <LogOut />
                    <span>Log Out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button className="rounded-full" variant="outline">
                  Login
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
