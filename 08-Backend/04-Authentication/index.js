import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import connectDB from "./src/db/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const encryptP = "$2b$10$s5q2yY18eQE10n59CPnWUO48YGpweG09ce5V/uXKgZlJzS2Cp.Jr6";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hYmR1bGxhaDIwMzdAZ21haWwuY29tIiwiaWF0IjoxNzMyODU3NTM4fQ.QqjHvu41SHVI4wiCBwZDskXRLQE8LkJiNTNZBdSqOjI";


connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed !!! ", err);
  });