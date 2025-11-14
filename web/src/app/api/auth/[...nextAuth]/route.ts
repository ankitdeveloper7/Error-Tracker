import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest, args: string[]) {
  console.log("this is routes", args);
  return NextResponse.json({
    message: "reached to the file successfully",
  });
}
