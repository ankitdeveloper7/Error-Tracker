import {
  MonitorSmartphone,
  Ban,
  ChartNoAxesCombined,
  FileChartColumnIncreasing,
} from "lucide-react";

export default function Features() {
  return (
    <>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-xs">
          <div className="border-b-2  md:border-b-0 sm:border-r-2 border-[#202026] p-4 text-left">
            <div>
              <MonitorSmartphone size={40} />
            </div>
            <p className="text-sm font-semibold py-2">
              Real-time Error Monitoring
            </p>
            <p>
              Instantly track and get notified of crashes, exceptions, and bugs.
            </p>
          </div>
          <div className=" border-b-2 md:border-b-0 md:border-r-2 border-[#202026] p-4">
            <div>
              <Ban size={40} />
            </div>
            <p className="text-sm font-semibold py-2">Detailed Error Logs</p>
            <p>
              View full stack traces, environment info, file name, line number,
              and more – all in one place.
            </p>
          </div>
          <div className="border-b-2 sm:border-b-0 sm:border-r-2 border-[#202026]  p-4">
            <div>
              <ChartNoAxesCombined size={40} />
            </div>
            <p className="text-sm font-semibold py-2">Error Status Tracking</p>
            <p>
              Mark errors as “In Process,” “Fixed,” or “Bug” to manage workflow
              efficiently.
            </p>
          </div>
          <div className="p-4">
            <div>
              <FileChartColumnIncreasing size={40} />
            </div>
            <p className="text-sm font-semibold py-2">Multi-Project Support</p>
            <p>
              Easily manage errors across multiple projects from a single admin
              dashboard.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
