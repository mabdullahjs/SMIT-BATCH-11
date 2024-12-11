import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./src/db/index.js";
import courseRoute from "./src/routes/course.routes.js";
import studentRoute from "./src/routes/student.routes.js";
const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//routes
app.use("/api/v1", courseRoute);
app.use("/api/v1", studentRoute);

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed !!! ", err);
  });
