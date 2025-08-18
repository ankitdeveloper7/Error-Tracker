// "use client";
// import React, { useEffect, useState } from "react";
// import { Sidebar, SidebarBody, SidebarLink } from "../../components/ui/sidebar";
// import {
//   IconArrowLeft,
//   IconBrandTabler,
//   IconFolder,
//   IconReport,
//   IconAlertHexagon,
//   IconUsb,
// } from "@tabler/icons-react";
// import { motion } from "motion/react";
// import { cn } from "@/lib/utils";
// import { usesetSidebarname } from "@/store/sidebarname";

// export default function SidebarMenu() {
//   const links = [
//     {
//       label: "Dashboard",
//       href: "#",
//       icon: (
//         <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
//       ),
//     },
//     {
//       label: "Project",
//       href: "#",
//       icon: (
//         <IconFolder className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
//       ),
//     },
//     {
//       label: "Reports",
//       href: "#",
//       icon: (
//         <IconReport className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
//       ),
//     },
//     {
//       label: "Alerts",
//       href: "#",
//       icon: (
//         <IconAlertHexagon className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
//       ),
//     },
//     {
//       label: "SDK & Integrations",
//       href: "#",
//       icon: (
//         <IconUsb className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
//       ),
//     },
//     {
//       label: "Logout",
//       href: "#",
//       icon: (
//         <IconArrowLeft className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
//       ),
//     },
//   ];
//   const [open, setOpen] = useState(false);
//   return (
//     <div
//       className={cn(
//         "mx-auto flex w-full  flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
//         "min-h-screen" // for your use case, use `h-screen` instead of `h-[60vh]`
//       )}
//     >
//       <Sidebar open={open} setOpen={setOpen}>
//         <SidebarBody className="justify-between gap-10">
//           <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
//             {open ? <Logo /> : <LogoIcon />}
//             <div className="mt-8 flex flex-col gap-2">
//               {links.map((link, idx) => (
//                 <SidebarLink key={idx} link={link} />
//               ))}
//             </div>
//           </div>
//           <div></div>
//         </SidebarBody>
//       </Sidebar>
//       {/* <Dashboard /> */}
//     </div>
//   );
// }
// export const Logo = () => {
//   return (
//     <a
//       href="#"
//       className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
//     >
//       <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
//       <motion.span
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="font-medium whitespace-pre text-black dark:text-white"
//       >
//         BugTrace
//       </motion.span>
//     </a>
//   );
// };
// export const LogoIcon = () => {
//   return (
//     <a
//       href="#"
//       className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
//     >
//       (
//       <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
//     </a>
//   );
// };

// // Dummy dashboard component with content
// const Dashboard = () => {
//   const dashboarname = usesetSidebarname((state) => state.name);
//   if (dashboarname == "Project") {
//     return (
//       <div className="flex flex-1">
//         <div className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl border border-neutral-200 bg-white p-2 md:p-10 dark:border-neutral-700 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200">
//           {/* <div className="flex gap-2">
//           {[...new Array(4)].map((i, idx) => (
//             <div
//               key={"first-array-demo-1" + idx}
//               className="h-20 w-full animate-pulse rounded-lg bg-gray-100 dark:bg-neutral-800"
//             ></div>
//           ))}
//         </div>
//         <div className="flex flex-1 gap-2">
//           {[...new Array(2)].map((i, idx) => (
//             <div
//               key={"second-array-demo-1" + idx}
//               className="h-full w-full animate-pulse rounded-lg bg-gray-100 dark:bg-neutral-800"
//             ></div>
//           ))}
//         </div> */}
//           <p>this is project section</p>
//         </div>
//       </div>
//     );
//   }
//   return (
//     <div className="flex flex-1">
//       <div className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl border border-neutral-200 bg-white p-2 md:p-10 dark:border-neutral-700 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200">
//         {/* <div className="flex gap-2">
//           {[...new Array(4)].map((i, idx) => (
//             <div
//               key={"first-array-demo-1" + idx}
//               className="h-20 w-full animate-pulse rounded-lg bg-gray-100 dark:bg-neutral-800"
//             ></div>
//           ))}
//         </div>
//         <div className="flex flex-1 gap-2">
//           {[...new Array(2)].map((i, idx) => (
//             <div
//               key={"second-array-demo-1" + idx}
//               className="h-full w-full animate-pulse rounded-lg bg-gray-100 dark:bg-neutral-800"
//             ></div>
//           ))}
//         </div> */}
//         <p>this is dashboard section</p>
//       </div>
//     </div>
//   );
// };

export default function page() {
  return (
    <>
      <div>this is dashboard section</div>
    </>
  );
}
