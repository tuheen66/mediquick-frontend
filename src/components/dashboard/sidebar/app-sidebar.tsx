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

// This is sample data.
const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/admin",
      icon: Bot,
      isActive: true,
      items: [
        {
          title: "Admin Home",
          url: "/admin",
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
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
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
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavAdmin />
      </SidebarFooter>
    </Sidebar>
  );
}
