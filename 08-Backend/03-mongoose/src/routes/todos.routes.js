import express from "express";
import {
  addTodo,
  deleteTodo,
  getAllTodos,
  getTodoWithId,
} from "../controllers/todos.controllers.js";

const router = express.Router();

router.post("/todo", addTodo);
router.get("/todos", getAllTodos);
router.get("/todo/:id", getTodoWithId);
router.delete("/todo/:id", deleteTodo);

export default router;

// upfront 15%
// figma design == lock 20%
// database design / modeling ||  10%
// backend  || frontend (tailwind, shadcn) 20%
// api intergeration (20%)
// testing software quality assurance
// production 5%

// 1 month free


// authentication
// storage
// nodemailer | relations | deployment
// payment integration
// socket io

