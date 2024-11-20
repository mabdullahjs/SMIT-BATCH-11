// dotenv
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from 'cors'


const app = express();
const port = process.env.PORT;

// middleware
app.use(cors())
app.use(express.json());


// app.use((req, res, next) => {
//   console.log("Time:", Date.now());
//   next();
// });

const users = [
  {
    id: 342343243224,
    title: "abd",
  },
  {
    id: 342343241224,
    title: "usman",
  },
];

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

// delete user
app.delete("/user/:id", (req, res) => {
  const { id } = req.params;

  const index = users.findIndex((item) => {
    return item.id === +id;
  });

  if (index === -1) {
    res.status(404).json({
      message: "No user found",
    });
    return;
  }

  users.splice(index, 1);
  res.status(200).json({
    message: "user deleted successfully",
    data: users,
  });
});

// edit user
app.put("/user/:id", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const index = users.findIndex((item) => item.id === +id);

  if (index === -1) {
    res.status(404).json({
      message: "no user found",
    });
    return;
  }

  if (!title) {
    res.status(400).json({
      message: "title is required",
    });
    return;
  }

  users[index].title = title;

  res.status(200).json({
    message: "user edited successfully",
    data: users,
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
