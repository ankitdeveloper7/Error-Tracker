"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandFacebook,
} from "@tabler/icons-react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { X } from "lucide-react";

export type SignupModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function SignupForm({ open, onClose }: SignupModalProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      {/* Overlay */}
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/60 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200"
      />

      {/* Centered modal */}
      <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-0">
        <DialogPanel
          transition
          className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 p-6 shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-3 top-3 text-neutral-700 dark:text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-full p-2 cursor-pointer transition"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Heading */}
          <h2 className="text-2xl font-bold text-center text-neutral-900 dark:text-neutral-100">
            Welcome to BugTrace
          </h2>
          {/* <p className="mt-2 text-center text-sm text-neutral-600 dark:text-neutral-400">
            Create an account to track your applications effectively.
          </p> */}

          {/* Form */}
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <LabelInputContainer>
              <Label htmlFor="fullname">Full Name</Label>
              <Input id="fullname" placeholder="John Doe" type="text" />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" placeholder="you@example.com" type="email" />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="••••••••" type="password" />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                placeholder="••••••••"
                type="password"
              />
            </LabelInputContainer>

            <button
              type="submit"
              className="relative h-10 w-full cursor-pointer rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-inner dark:from-zinc-900 dark:to-zinc-800"
            >
              Sign Up →
              <BottomGradient />
            </button>

            <p className="text-center text-sm text-neutral-700 dark:text-neutral-300">
              Already have an account?{" "}
              <a href="#" className="underline text-blue-500">
                Sign In
              </a>
            </p>

            <div className="my-4 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

            {/* Social buttons */}
            <div className="flex flex-col space-y-3">
              <SocialButton icon={IconBrandGithub} text="Sign up with GitHub" />
              <SocialButton icon={IconBrandGoogle} text="Sign up with Google" />
              <SocialButton
                icon={IconBrandFacebook}
                text="Sign up with Facebook"
              />
            </div>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

const SocialButton = ({
  icon: Icon,
  text,
}: {
  icon: React.ElementType;
  text: string;
}) => (
  <button
    type="button"
    className="group relative flex h-10 w-full items-center justify-center space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black shadow-sm dark:bg-zinc-900 dark:text-neutral-200"
  >
    <Icon className="h-4 w-4" />
    <span className="text-sm">{text}</span>
    <BottomGradient />
  </button>
);

const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-300 group-hover:opacity-100" />
  </>
);

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex w-full flex-col space-y-2", className)}>
    {children}
  </div>
);
