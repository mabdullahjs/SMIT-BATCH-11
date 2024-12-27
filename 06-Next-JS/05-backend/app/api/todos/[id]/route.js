import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = await params;

  return NextResponse.json({
    message: "dynamic route",
    id,
  });
}
