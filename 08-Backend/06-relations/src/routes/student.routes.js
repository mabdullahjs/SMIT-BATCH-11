import express from "express";
import { addStudent, getStudent } from "../controllers/student.controllers.js";

const router = express.Router();

router.post("/student", addStudent);
router.get("/student/:id", getStudent);

export default router;
