import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// type formatedError = {
//   type: string;
//   message: string;
//   source: string;
//   lineno: number;
//   colno: number;
//   status: "Bug";
//   error: string;
// };
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    await prisma.error.create({
      data: {
        type: "",
        message: body.message,
        source: body.source,
        lineno: body.lineno,
        colno: body.colno,
        status: "Bug",
        error: body.error,
        projectId:body.projectId
      },
    });
    return NextResponse.json(
      { message: "Error logged successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error logginh failed", error },
      { status: 500 }
    );
  }
}
