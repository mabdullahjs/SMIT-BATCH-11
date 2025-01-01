// import { NextResponse } from "next/server";
// import { todos } from "../todo";

// export async function GET(request, { params }) {
//   const { id } = await params;
//   const index = todos.findIndex((item) => item.id === +id);
//   console.log(index);
//   if (index === -1)
//     return NextResponse.json({ message: "no todo found" }, { status: 404 });

//   return NextResponse.json({
//     todo: todos[index],
//   });
// }

// // leetcode

// // edit and delete

import { connectToDatabase } from "@/utils/dbConn.js";
import todosModels from "@/models/todos.models";
import { NextResponse } from "next/server";

// Get a single todo by ID
export const GET = async (request, { params }) => {
  const { id } = await params;
  try {
    await connectToDatabase();

    const todo = await todosModels.findById(id);

    if (!todo) {
      return NextResponse.json({ message: "Todo not found" }, { status: 404 });
    }

    return NextResponse.json({ todo }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch todo", error: error.message },
      { status: 500 }
    );
  }
};

// Update a todo by ID
export const PUT = async (request, { params }) => {
  const { id } = await params;
  try {
    await connectToDatabase();

    const body = await request.json();
    const updatedTodo = await todosModels.findByIdAndUpdate(
      id,
      {
        ...body,
      },
      { new: true }
    );

    if (!updatedTodo) {
      return NextResponse.json({ message: "Todo not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Todo updated successfully", todo: updatedTodo },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to update todo", error: error.message },
      { status: 500 }
    );
  }
};

// Delete a todo by ID
export const DELETE = async (request, { params }) => {
  const { id } = await params;
  try {
    await connectToDatabase();

    const deletedTodo = await todosModels.findByIdAndDelete(id);

    if (!deletedTodo) {
      return NextResponse.json({ message: "Todo not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Todo deleted successfully", todo: deletedTodo },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete todo", error: error.message },
      { status: 500 }
    );
  }
};
