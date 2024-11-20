import express from "express";
import { addTodo } from "../controllers/todos.controllers.js";

const router = express.Router();

router.post("/todo", addTodo);

export default router;
