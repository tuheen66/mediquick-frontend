"use client";

import * as React from "react";
import { Bot } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { NavMain } from "./nav-main";

import Link from "next/link";

import { NavAdmin } from "./nav-admin";
import { useUser } from "@/context/UserContext";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Admin Dashboard",
      url: "/admin/dashboard",
      icon: Bot,
      isActive: true,
      items: [
        {
          title: "Admin Home",
          url: "/admin/dashboard",
        },
        {
          title: "Manage Medicines",
          url: "/admin/medicines",
        },
        {
          title: "Manage Orders",
          url: "/admin/orders",
        },
        {
          title: "Manage Users",
          url: "/admin/users",
        },
      ],
    },
  ],
  navCustomer: [
    {
      title: "Customer Dashboard",
      url: "/customer/dashboard",
      icon: Bot,
      isActive: true,
      items: [
        {
          title: "Customer Profile",
          url: "/customer/dashboard",
        },

        {
          title: "Customer Orders",
          url: "/customer/orders",
        },
        {
          title: "Customer Reviews",
          url: "/customer/reviews",
        },
      ],
    },
  ],
};

interface IUserProviderValues {
  role: string | undefined;
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const user = useUser();

  console.log(user);
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="grid flex-1 text-center  leading-relaxed">
                  <h2 className="font-bold text-orange-500 text-2xl">
                    Mediquick
                  </h2>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        {user && user?.user?.role === "admin" ? (
          <NavMain items={data.navMain} />
        ) : (
          <NavMain items={data.navCustomer} />
        )}
      </SidebarContent>

      <SidebarFooter>
        <NavAdmin />
      </SidebarFooter>
    </Sidebar>
  );
}
