import express from "express";
import {
  addStudent,
  getAllStudent,
  getStudent,
} from "../controllers/student.controllers.js";

const router = express.Router();

router.post("/student", addStudent);
router.get("/student/:id", getStudent);
router.get("/student", getAllStudent);

export default router;
