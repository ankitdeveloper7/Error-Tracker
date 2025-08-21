"use client";
import AddProjectModal from "@/components/Modal/AddProjectModal";
import { useState } from "react";

export default function Project() {
  const [open, setOpen] = useState(false);

  function closeprojectmodal() {
    setOpen(false);
  }
  return (
    <>
      {/* <div className=""> */}
      <div className=" min-h-screen min-w-screen gap-2 rounded-tl-2xl border border-neutral-200 bg-white p-2 md:p-10 dark:border-neutral-700 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200">
        <div className="relative m-4">
          <div className="inline-block">
            <h1 className="text-2xl font-bold">Project Section</h1>
            <p className="text-sm text-gray-500">
              Manage your projects here. You can add, edit, or delete projects.
            </p>
          </div>
          <div className="inline-block absolute right-4 top-0">
            <button
              onClick={() => setOpen(true)}
              className="border-2 rounded px-4 py-2"
            >
              +Add Project{" "}
            </button>
          </div>
          <AddProjectModal open={open} onClose={closeprojectmodal} />
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
