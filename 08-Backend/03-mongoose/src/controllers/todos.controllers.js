import mongoose from "mongoose";
import Todos from "../models/todos.models.js";

// add todo

const addTodo = (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    res.status(400).json({
      message: "title or description required",
    });
    return;
  }

  const todo = Todos.create({
    title,
    description,
  });
  res.status(201).json({
    message: "user added to database successfully",
  });
};

// get all todo
// get single todo
// delete todo
// edit todo

export { addTodo };
