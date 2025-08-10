import {
  MonitorSmartphone,
  Ban,
  ChartNoAxesCombined,
  FileChartColumnIncreasing,
} from "lucide-react";
import HorizontalLine from "../HorizontalLine";

export default function Features() {
  return (
    <>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-base">
          <div className="border-b-2  md:border-b-0 sm:border-r-2 border-[#202026] py-8 px-4 text-left grid gap-1">
            <div>
              <MonitorSmartphone
                className="border-2 p-2 text-black bg-white"
                size={40}
              />
            </div>
            <p className="font-semibold">Real-time Error Monitoring</p>
            <p>
              Instantly track and get notified of crashes, exceptions, and bugs.
            </p>
          </div>
          <div className=" border-b-2 md:border-b-0 md:border-r-2 border-[#202026] py-8 px-4  grid gap-1">
            <div>
              <Ban size={40} />
            </div>
            <p className="font-semibold py-2">Detailed Error Logs</p>
            <p>
              View full stack traces, environment info, file name, line number,
              and more – all in one place.
            </p>
          </div>
          <div className="border-b-2 sm:border-b-0 sm:border-r-2 border-[#202026]  py-8 px-4  grid gap-1">
            <div>
              <ChartNoAxesCombined size={40} />
            </div>
            <p className="font-semibold py-2">Error Status Tracking</p>
            <p>
              Mark errors as “In Process,” “Fixed,” or “Bug” to manage workflow
              efficiently.
            </p>
          </div>
          <div className="py-8 px-4 grid gap-1">
            <div>
              <FileChartColumnIncreasing size={40} />
            </div>
            <p className="font-semibold py-2">Multi-Project Support</p>
            <p>
              Easily manage errors across multiple projects from a single admin
              dashboard.
            </p>
          </div>
        </div>
      </div>

      <HorizontalLine />
    </>
  );
}
