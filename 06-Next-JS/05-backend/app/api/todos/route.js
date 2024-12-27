import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      message: "Getting all todos",
    },
    { status: 202 }
  );
}

export async function POST(request) {
    const body = await request.json(); 
  return NextResponse.json({ body: data.body });
}
