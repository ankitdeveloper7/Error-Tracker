import HorizontalLine from "@/components/HorizontalLine";
import CTA from "@/components/ui/CTA";
import Features from "@/components/ui/Features";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-2 relative">
      <Header />
      {/* <div className=" flex justify-center font-semibold text-3xl w-20  py-4">
        <div className="min-w-lg">
          Cut the noise. Get the insights you need, right when you need them.
        </div>
      </div> */}
      <div>
        <center className="">
          <div className="font-semibold text-2xl ">
            Powerful Features Built for Developers
          </div>
          <p className="py-2 text-sm">
            Track, debug, and resolve errors — all in one sleek,
            developer-friendly dashboard.
          </p>
        </center>
        <HorizontalLine />
        <div className="border-[#202026] border-x-2 mx-5 ">
          <Features />
          <HorizontalLine />
          <div className="mt-[80px]">
            <HorizontalLine />
          </div>
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}
