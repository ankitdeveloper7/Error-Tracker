import HorizontalLine from "@/components/HorizontalLine";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <HorizontalLine />
      <div className="grid grid-cols-1 sm:grid-cols-3 px-4 py-8">
        <div className="col-span-2">
          <p className="mb-3 text-xl">BugTrace</p>
          <p className="text-sm w-2xs md:w-sm">
            BugTrace helps developers detect, analyze, and resolve bugs in real
            time — whether you&apos;re shipping solo or with a team.
          </p>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <p className="text-base font-semibold mb-3">Navigations</p>
            <div className="flex flex-col gap-1 text-sm ">
              <Link href="" className="hover:text-[#00ffb2]">
                Home
              </Link>
              <Link href="" className="hover:text-[#00ffb2]">
                Features
              </Link>
              <Link href="" className="hover:text-[#00ffb2]">
                How it Works
              </Link>
              <Link href="" className="hover:text-[#00ffb2]">
                GitHub
              </Link>
              <Link href="" className="hover:text-[#00ffb2]">
                Docs
              </Link>
              <Link href="" className="hover:text-[#00ffb2]">
                Blog
              </Link>
            </div>
          </div>
          <div>
            <p className="text-base font-semibold mb-3">Social Links</p>
            <div className="flex flex-col gap-1 text-sm">
              <Link href="" className="hover:text-[#00ffb2]">
                Twitter(X)
              </Link>
              <Link href="" className="hover:text-[#00ffb2]">
                GitHub
              </Link>
              <Link href="" className="hover:text-[#00ffb2]">
                Linkedln
              </Link>
              <Link href="" className="hover:text-[#00ffb2]">
                Discord
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
