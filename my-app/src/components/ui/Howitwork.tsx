import HorizontalLine from "../HorizontalLine";
import terminal from "../../../public/Images/Terminal.png";
import connect from "../../../public/Images/connect.png";
import bugs from "../../../public/Images/Bugs.png";
import Image from "next/image";

export default function HowitWork() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-2  p-4 border-b-2 md:border-b-0 md:border-r-2 border-[#202026]">
          <div className="text-4xl font-normal">How it Works?</div>
          <div className="text-base py-2">
            Three simple steps to track, fix, and prevent bugs — without slowing
            you down.
          </div>
        </div>
        <div className="relative">
          <button className="font-normal  text-lg text-[#00ffb2] cursor-pointer border-[#202026] md:border-t-2 w-full md:absolute md:right-0 md:bottom-0 py-4 hover:bg-[#66ffd1] hover:text-black">
            Start Monitoring Now →
          </button>
        </div>
      </div>

      <HorizontalLine />
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 text-base">
          <div className="border-b-2  md:border-b-0 sm:border-r-2 border-[#202026]  text-left grid gap-2">
            <div>
              <Image
                src={terminal}
                alt="this is terminal image"
                className="w-full h-full"
              />
            </div>
            {/* <p className="font-semibold">Install</p>
            <p>
              Add our SDK in seconds — one npm install or a single script tag.
            </p> */}
          </div>
          <div className=" border-b-2 md:border-b-0 md:border-r-2 border-[#202026] grid gap-2">
            <div>
              <Image
                src={connect}
                alt="this is terminal image"
                className="w-full h-full"
              />
            </div>
            {/* <p className="font-semibold py-2">Connect</p>
            <p>
              Create a project in your dashboard and paste your unique token.
            </p> */}
          </div>
          <div className="grid gap-2">
            <div>
              <Image
                src={bugs}
                alt="this is terminal image"
                className="w-full h-full"
              />
            </div>
            {/* <p className="font-semibold py-2">Monitor & Fix</p>
            <p>
              See real-time error reports, track status, and mark issues as
              fixed.
            </p> */}
          </div>
        </div>
      </div>
      <HorizontalLine />
    </>
  );
}
