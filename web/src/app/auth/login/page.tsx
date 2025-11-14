"use client";
import { useRouter } from "next/router";

export default function Login() {
  //   const route = useRouter();

  //   async function login() {
  //     route.push("/dashboard");
  //   }
  return (
    <>
      <div className="w-screen h-screen bg-white">
        <div className="flex justify-center">
          <div className="w-3xl text-black border-1 rounded-lg m-4 flex">
            <div className="bg-[#111827] w-content rounded-l-lg text-white  min-h-sm p-4">
              BugTrace
            </div>
            <div className="p-4">
              <h3 className=" text-[#111827] font-medium text-3xl">
                Sign in to continue
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 p-4">
                <div className="px-4">
                  <div className="my-2 text-[#111827 font-semibold">
                    <label>
                      Account{" "}
                      <span className="text-[#d5d5d5] ml-2">[REQUIRED]</span>
                    </label>
                    <input
                      type="name"
                      name="accoutnname"
                      placeholder="username or email"
                      className="p-2 mt-1 w-full border-1"
                    />
                  </div>
                  <div className="my-2 font-semibold">
                    <label>
                      Password
                      <span className="text-[#d5d5d5] ml-2">[REQUIRED]</span>
                    </label>
                    <input
                      type="password"
                      name="accoutnname"
                      placeholder="password"
                      className="p-2 mt-1 w-full border-1"
                    />
                  </div>
                  <div>
                    <a
                      href="../dashboard"
                      className="text-black px-2 py-1  text-lg border-2 bg-white rounded cursor-pointer hover:text-black hover:bg-[#00e6a0] hover:border-[#00ffb2]"
                    >
                      continue
                    </a>
                  </div>
                </div>
                <div className="px-4 sm:border-l-2">
                  <div className="my-2">
                    <button className="p-2 border-2 rounded">
                      Sign in with google
                    </button>
                  </div>
                  <div className="my-2">
                    <button className="p-2 border-2 rounded">
                      Sign in with Github
                    </button>
                  </div>
                  <div className="my-2">
                    <button className="p-2 border-2 rounded">
                      Sign in with Azure DevOps
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
