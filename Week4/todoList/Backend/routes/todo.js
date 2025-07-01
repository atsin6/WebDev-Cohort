const { Router } = require("express");
const router = Router();
const { nanoid } = require("nanoid");
// const { writeUsers } = require("../database");

let { readUsers, writeUsers } = require("../database/index.js");

// get todo
router.get("/", (req, res) => {
  let user = req.user;
  let todos = user.todos;

  res.json({ message: "Working", data: todos });
});
// add/create todo
router.post("/", (req, res) => {
  let recievedData = req.body;
  recievedData.id = nanoid();
  req.user.todos.push(recievedData);
  writeUsers();
  res
    .status(201)
    .json({ message: "Data recieved successfully", data: recievedData });
});

// edit/update todo

router.put("/:todoId", (req, res) => {
  const todoId = req.params.todoId;
  let updateInfo = req.body;

  let todos = req.user.todos;

  // todos.find((todo) => todo.id === todoId).title = updateInfo.title;
  let todo = todos.find((todo) => todo.id === todoId);
  console.log("Todo: ", todo);
  if (todo) {
    todos.find((todo) => todo.id === todoId).title = updateInfo.title;
    todos.find((todo) => todo.id === todoId).isDone = updateInfo.isDone;
    req.user.todos = todos;

    writeUsers();
    res.status(200).json({ message: "Todo updated", data: todos });
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
});

// delete all todos
router.delete("/deleteAll", (req, res) => {
  req.user.todos = [];
  writeUsers();
  res.status(200).json({ message: "All Todos deleted" });
});

// delete todo
router.delete("/:todoId", (req, res) => {
  const todoId = req.params.todoId;

  let todos = req.user.todos;

  let todoIdx = todos.findIndex((todo) => todo.id === todoId);

  if (todoIdx !== -1) {
    todos.splice(todoIdx, 1);
    req.user.todos = todos;
    writeUsers();
    res.status(200).json({ message: "Todo deleted" });
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
});

module.exports = router;
