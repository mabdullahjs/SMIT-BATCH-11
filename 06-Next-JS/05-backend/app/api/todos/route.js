// import { NextResponse } from "next/server";
// import { todos, updateTodos } from "./todo";

// export async function GET() {
//   return NextResponse.json(
//     {
//       message: "Getting all todos",
//       todos,
//     },
//     { status: 202 }
//   );
// }

// export async function POST(request) {
//   const data = await request.json();
//   updateTodos([
//     ...todos,
//     {
//       title: data.title,
//       id: Date.now(),
//     },
//   ]);
//   console.log(data);
//   return NextResponse.json({
//     message: "todo added successfully",
//     todos,
//   });
// }

import todosModels from "@/models/todos.models";
import { connectToDatabase } from "@/utils/dbConn";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    await connectToDatabase();

    if (!body.title)
      return NextResponse.json(
        { message: "Invalid todo title" },
        { status: 400 }
      );

    const newTodo = await todosModels.create({
      title: body.title,
    });

    return NextResponse.json(
      { message: "New todo added", todo: newTodo },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create todo", error: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectToDatabase();

    const todos = await todosModels.find({});
    return NextResponse.json({ todos }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch todos", error: error.message },
      { status: 500 }
    );
  }
}
