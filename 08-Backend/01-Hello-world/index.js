import express from "express";

const app = express();
const port = 3000;

// middleware
app.use(express.json());

const users = [
  {
    id: 1,
    name: "Muhammad Abdullah",
  },
  {
    id: 2,
    name: "Muhammad Usman",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// get all users

app.get("/users", (req, res) => {
  res.json(users);
});

// add user

app.post("/user", (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.json({
      message: "Name is required",
    });
    return;
  }
  users.push({
    id: Date.now(),
    name,
  });
  res.send({
    message: "user added successfully",
    data: users,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// get
// post
// put
// delete

// nodemon
// postman
