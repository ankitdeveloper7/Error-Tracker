"use client";
import { X } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  // DialogTitle,
} from "@headlessui/react";
// import addProject from "@/app/actions/Project";
// import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

type AddProjectModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function AddProjectModal({
  open,
  onClose,
}: AddProjectModalProps) {
  //   const [open, setOpen] = useState(true);
  async function addProject(formData: FormData) {
    alert("this function is being called");
    const projectname = formData.get("projectname");
    // const tech = formdata.get("tech");
    // const env = formdata.get("env");
    // const team = formdata.get("team");

    console.log(projectname);
    onClose();
  }
  return (
    <div>
      <Dialog open={open} onClose={onClose} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="bg-[#202026] text-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 relative">
                <h3 className="">Add Your Project</h3>
                <form action={addProject}>
                  <div className="my-4">
                    <label>
                      Project Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded border-2 mt-2"
                      name="projectname"
                      placeholder="E-commerce Platform"
                    />
                  </div>
                  <div className="my-4">
                    <label>
                      Language <span className="text-red-600">*</span>
                    </label>
                    <div>
                      <select
                        name="tech"
                        className="w-full px-4 py-2 rounded border-2 bg-[#202026] mt-2"
                      >
                        <option value="Nodejs">Nodejs</option>
                        <option value="Nextjs">Nextjs</option>
                        <option value="Reactjs">Reactjs</option>
                        {/* <option value="Java">Java</option>
                        <option value="python">Python</option> */}
                      </select>
                    </div>
                  </div>
                  <div className="my-4">
                    <label>Environment</label>
                    <div>
                      <select
                        name="env"
                        className="w-full px-4 py-2 rounded border-2 bg-[#202026] mt-2"
                      >
                        <option value="Production">Production</option>
                        <option value="Staging">Staging</option>
                        <option value="Development">Development</option>
                      </select>
                    </div>
                  </div>
                  <div className="my-4">
                    <label>Organization / Team</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded border-2 mt-2"
                      name="team"
                      placeholder="Flipkart-Frontend"
                    />
                  </div>
                </form>
                <button
                  className="w-full my-4 py-2 text-black border-2 bg-white rounded cursor-pointer hover:text-black hover:bg-[#00ffb2] hover:border-[#00ffb2]"
                  type="submit"
                >
                  Create
                </button>
                <button
                  onClick={onClose}
                  className="absolute right-1 top-1 cursor-pointer text-white"
                >
                  <X />
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
