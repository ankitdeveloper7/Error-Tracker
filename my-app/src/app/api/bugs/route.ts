import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

type formatedError = {
  type: string;
  message: string;
  source: string;
  lineno: string;
  colno: string;
  status: "Bug";
  error: string;
};
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    await prisma.error.create({
      where: {
        projectId: "",
        apiKey: "",
      },
      data: {
        type: body.errortype,
        message: body.message,
        source: body.source,
        lineno: body.lineno,
        colno: body.colno,
        status: "Bug",
        error: body.error,
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
