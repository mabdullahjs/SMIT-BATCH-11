import express from "express";
import {
  loginUser,
  logoutUser,
  refreshToken,
  registerUser,
} from "../controllers/users.controllers.js";

const router = express.Router();

// register user
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/refreshtoken", refreshToken);

export default router;
