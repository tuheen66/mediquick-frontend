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

        <nav className="flex flex-wrap justify-center lg:justify-between items-center gap-4 lg:gap-12">
          {/* Original Shop Link */}
          <Link
            href="/shop"
            className={
              pathname === "/shop"
                ? "text-orange-500 font-semibold"
                : "hover:text-slate-500 hover:underline"
            }
          >
            Shop
          </Link>

          {/* Separate MegaMenu Trigger */}
          <div className="group relative">
            <button className="hover:text-slate-500 hover:underline">
              Categories
            </button>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-screen max-w-4xl bg-gray-200 shadow-lg py-3 z-50 border-t border-orange-300 hidden group-hover:block">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-3 gap-4">
                  {/* Column 1: Medicine Categories */}
                  <div className="px-3">
                    <h3 className="text-orange-500 text-sm font-semibold mb-2">
                      Medicines
                    </h3>
                    <ul className="space-y-1">
                      <li>
                        <Link
                          href="/shop?category=All&prescription=Yes"
                          className="text-gray-700 hover:text-orange-500 hover:underline text-sm block"
                        >
                          Prescription
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/shop?category=Painkiller&prescription=All"
                          className="text-gray-700 hover:text-orange-500 hover:underline text-sm block"
                        >
                          Painkiller
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/shop?category=Antibiotics&prescription=All"
                          className="text-gray-700 hover:text-orange-500 hover:underline text-sm block"
                        >
                          Antibiotics
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Column 2: Health Concerns */}
                  <div className="px-3 border-l border-gray-100">
                    <h3 className="text-orange-500 text-sm font-semibold mb-2">
                      Health
                    </h3>
                    <ul className="space-y-1">
                      <li>
                        <Link
                          href="/shop?category=Gastrointestinal&prescription=All"
                          className="text-gray-700 hover:text-orange-500 hover:underline text-sm block"
                        >
                          Gastrointestinal
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/shop?category=Cardiovascular&prescription=All"
                          className="text-gray-700 hover:text-orange-500 hover:underline text-sm block"
                        >
                          Cardiovascular
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/shop?category=Supplements&prescription=All"
                          className="text-gray-700 hover:text-orange-500 hover:underline text-sm block"
                        >
                          Supplements
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Column 3: Wellness */}
                  <div className="px-3 border-l border-gray-100">
                    <h3 className="text-orange-500 text-sm font-semibold mb-2">
                      Wellness
                    </h3>
                    <ul className="space-y-1">
                      <li>
                        <Link
                          href="/shop?category=Allergy&prescription=All"
                          className="text-gray-700 hover:text-orange-500 hover:underline text-sm block"
                        >
                          Allergy
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/shop?category=Diabetes&prescription=All"
                          className="text-gray-700 hover:text-orange-500 hover:underline text-sm block"
                        >
                          Diabetes
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/shop?category=Endocrine&prescription=All"
                          className="text-gray-700 hover:text-orange-500 hover:underline text-sm block"
                        >
                          Endocrine
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/health"
            className={
              pathname === "/health"
                ? "text-orange-500 font-semibold"
                : "hover:text-slate-500 hover:underline"
            }
          >
            Health Tips
          </Link>

          <Link
            href="/about"
            className={
              pathname === "/about"
                ? "text-orange-500 font-semibold"
                : "hover:text-slate-500 hover:underline"
            }
          >
            About Us
          </Link>

          <Link
            href="/contact"
            className={
              pathname === "/contact"
                ? "text-orange-500 font-semibold"
                : "hover:text-slate-500 hover:underline"
            }
          >
            Contact Us
          </Link>
        </nav>

        <div className="flex justify-center items-center gap-4">
          <Link href="/cart">
            <FiShoppingCart className="text-2xl text-orange-500" />
          </Link>

          {user ? (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <AlignVerticalJustifyStart className="rounded-full">
                    <Avatar>
                      <AvatarImage
                        src={"https://github.com/shadcn.png"}
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </AlignVerticalJustifyStart>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
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
                <Button className="rounded-none border-1 border-gray-500">
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
