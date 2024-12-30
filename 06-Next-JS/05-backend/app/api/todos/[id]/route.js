import { NextResponse } from "next/server";
import { todos } from "../todo";

export async function GET(request, { params }) {
  const { id } = await params;
  const index = todos.findIndex((item) => item.id === +id);
  console.log(index);
  if (index === -1)
    return NextResponse.json({ message: "no todo found" }, { status: 404 });

  return NextResponse.json({
    todo: todos[index],
  });
}

// leetcode

// edit and delete
