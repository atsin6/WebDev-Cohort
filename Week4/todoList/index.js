const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT;
const todoRoutes = require("./Backend/routes/todo");
const userRoutes = require("./Backend/routes/user");
const checkLogin = require("./Backend/middleware/user.js");

app.use(express.json());
app.use("/user", userRoutes);
app.use("/todos", checkLogin, todoRoutes);

// rout handlers
app.get("/healthy", (req, res) => res.send("I am Healthy"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
