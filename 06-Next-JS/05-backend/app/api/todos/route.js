import { NextResponse } from "next/server";
import { todos, updateTodos } from "./todo";

export async function GET() {
  return NextResponse.json(
    {
      message: "Getting all todos",
      todos,
    },
    { status: 202 }
  );
}

export async function POST(request) {
  const data = await request.json();
  updateTodos([
    ...todos,
    {
      title: data.title,
      id: Date.now(),
    },
  ]);
  console.log(data);
  return NextResponse.json({
    message: "todo added successfully",
    todos,
  });
}
