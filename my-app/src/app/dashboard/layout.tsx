"use client"; // Make this layout a client component

// import SidebarMenu, { Logo, LogoIcon } from "@/layout/SidebarMenu";
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import { Sidebar } from "@/components/ui/sidebar";
import { SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { links } from "@/config/sidebarMenu";
import { useState } from "react";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div
          className={cn(
            "mx-auto flex w-full  flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
            "min-h-screen" // for your use case, use `h-screen` instead of `h-[60vh]`
          )}
        >
          <Sidebar open={open} setOpen={setOpen}>
            <SidebarBody className="justify-between gap-10">
              <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
                {/* {open ? <Logo /> : <LogoIcon />} */}
                <div className="mt-8 flex flex-col gap-2">
                  {links.map((link, idx) => (
                    <SidebarLink key={idx} link={link} />
                  ))}
                </div>
              </div>
              <div></div>
            </SidebarBody>
          </Sidebar>
          {/* <Dashboard /> */}
          <main className="text-white">{children}</main>
        </div>
      </body>
    </html>
  );
}
