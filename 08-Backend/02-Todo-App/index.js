// dotenv
import dotenv from "dotenv";
dotenv.config();

import express from "express";

const app = express();
const port = process.env.PORT;

// middleware
app.use(express.json());

// app.use((req, res, next) => {
//   console.log("Time:", Date.now());
//   next();
// });

const users = [];

app.get("/", (req, res) => {
  res.send("hello world!");
});

// add new user
app.post("/user", (req, res) => {
  const { title } = req.body;
  if (!title) {
    res.status(400).json({
      message: "title is required",
    });
    return;
  }

  users.push({
    title,
    id: Date.now(),
  });

  res.status(201).json({
    message: "user is created",
    data: users,
  });
});

// get all user
app.get("/users", (req, res) => {
  res.status(200).json({
    data: users,
  });
});

// get single user
app.get("/user/:id", (req, res) => {
  const { id } = req.params;

  const index = users.findIndex((item) => item.id === +id);

  if (index === -1) {
    res.status(404).json({
      message: "user not found",
    });
    return;
  }

  res.status(200).json({
    data: users[index],
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// get
// post
// delete
// put

// 404 not found
