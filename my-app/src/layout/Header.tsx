"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Features", href: "#features" },
  { name: "Docs", href: "#" },
  { name: "HowItWork", href: "#howitwork" },
  { name: "GitHub", href: "https://github.com/ankitdeveloper7/Error-Tracker" },
];

// #abffe6

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="">
      {/* <div className="absolute right-0 top-0 w-1/3  pointer-events-none bg-gradient-to-l from-white/12 bg-gradient-to-d from-white/12 to-transparent blur-4xl" /> */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="m-1.5 p-1.5">
              <span className="text-2xl font-semibold text-[#00ffb2]">
                BugTrace
              </span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="size-8 text-white cursor-pointer"
              />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm/6 font-semibold text-gray-900 text-white hover:text-[#00ffb2]"
                target="_blank"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm/6  text-white hover:text-[#00ffb2] font-semibold"
            >
              Start Free <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0  z-50 w-full overflow-y-auto bg-black p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="text-2xl font-semibold text-[#00ffb2]">
                  BugTrace
                </span>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon
                  aria-hidden="true"
                  className="size-8 text-white cursor-pointer
                "
                />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7  hover:bg-gray-50 text-white hover:text-black"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-black bg-[#00ffb2]"
                  >
                    Start Free
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      {/* <div className="absolute left-0 top-0 w-1/3 h-full pointer-events-none bg-gradient-to-l from-white/20 to-transparent blur-xl" /> */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        ></div>
        <div className="mx-auto max-w-2xl py-22 sm:py-28 lg:py-36">
          <div className="text-center">
            <h1 className="text-5xl  tracking-tight text-balance  sm:text-7xl text-[#F5F5F5]">
              Catch Bugs Before Your Users Do.
            </h1>
            <p className="mt-8 text-sm  text-pretty text-[#d5d5d5] font-normal sm:text-base md:text-lg">
              Get real-time error tracking, detailed stack traces, and instant
              alerts — all in one blazing-fast dashboard.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-[#00ffb2] font-semibold px-3.5 py-2.5 text-sm  text-black shadow-xs  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Start Free
              </a>
              <a href="#" className="text-sm/6 font-semibold text-white">
                See Doc{" "}
                <span aria-hidden="true" className="">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        ></div>
      </div>
    </div>
  );
}
