import { NextRequest, NextResponse } from "next/server";

// export default function GET(req: NextRequest) {
//   //   return NextResponse.json({
//   //     message: "signin page opened",
//   //   });
//   console.log("singin page logged int");
// }

export function GET(_req: NextRequest) {
  return NextResponse.json({ message: "signin page opened" });
}