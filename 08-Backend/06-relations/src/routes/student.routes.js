import express from "express";
import { addStudent } from "../controllers/student.controllers.js";

const router = express.Router();

router.post("/student", addStudent);

export default router;
