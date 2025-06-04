const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

let todos = [];
let no_of_todos = 3;

function readFromJSON() {
  let content = fs.readFileSync("file.json", "utf-8");
  todos = JSON.parse(content);
}
function writeToJSON() {
  let JSONobj = JSON.stringify(todos, null, 2);
  fs.writeFileSync("file.json", JSONobj, "utf-8");
}

function getAllTodos() {
  readFromJSON();
  const todosHTML = todos
    .map((todo, i) => {
      return `
      <div id="todo-div-0" class="todo-div">
        <label id="todo-label-0" for="todo-0">
          <form action="/markUnmark/${todo.id}" method="POST">
            <input type="checkbox" id="todo-0" name="toggleDone" onchange="this.form.submit()" ${
              todo.isDone ? "checked" : ""
            }>
          </form>

          <span id="todo-span-0" ${
            todo.isDone ? 'style="text-decoration: line-through;"' : ""
          }>${i + 1 + ". " + todo.title}.</span>
        </label>
          <div id="btn-div">
          <form action="/editTodo/${todo.id}" method="POST">
              <button type="submit">
                Edit
              </button>
            </form>
            <form action="/deleteTodo/${todo.id}" method="POST">
              <button type="submit">
                Delete
              </button>
            </form>
          </div>
        </div>
    `;
    })
    .join("");

  const fullHTML = `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Todo</title>
    </head>

    <body>
        <div>
            <nav>
                <h1>Todo.</h1>
            </nav>
            <div id="todos">
                ${todosHTML}
            </div>

            <div id="input-div">
                <form action="/addTodo" method="POST">
                  <input id="todo-input" name="todoInput" type="text"></input>
                  <button type="submit">
                    Add Todo!
                  </button>
                </form>
            </div>
        </div>
    </body>

    </html>
  `;

  return fullHTML;
}
function editTodoUI(req, res, next) {
  const id = parseInt(req.params.id);

  const todosHTML = todos
    .map((todo, i) => {
      if (todo.id == id) {
        return `
          <div id="todo-div-0" class="todo-div">
            <label id="todo-label-0" for="todo-0">
              <form action="/saveEditedTodo/${id}" method="POST">
                <input id="edit-todo-input" name="todoEditedInput" type="text"></input>
                <button type="submit">
                  Save
                </button>
              </form>
            </label>
          </div>
        `;
      } else {
        return `
      <div id="todo-div-0" class="todo-div">
        <label id="todo-label-0" for="todo-0">
          <form action="/markUnmark/${todo.id}" method="POST">
            <input type="checkbox" id="todo-0" name="toggleDone" onchange="this.form.submit()" ${
              todo.isDone ? "checked" : ""
            }>
          </form>
          <span id="todo-span-0">${i + 1 + ". " + todo.title}.</span>
        </label>
          <div id="btn-div">
          <form action="/editTodo/${todo.id}" method="POST">
              <button type="submit">
                Edit
              </button>
            </form>
            <form action="/deleteTodo/${todo.id}" method="POST">
              <button type="submit">
                Delete
              </button>
            </form>
          </div>
        </div>
    `;
      }
    })
    .join("");

  const fullHTML = `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Todo</title>
    </head>

    <body>
        <div>
            <nav>
                <h1>Todo.</h1>
            </nav>
            <div id="todos">
                ${todosHTML}
            </div>

            <div id="input-div">
                <form action="/addTodo" method="POST">
                  <input id="todo-input" name="todoInput" type="text"></input>
                  <button type="submit">
                    Add Todo!
                  </button>
                </form>
            </div>
        </div>
    </body>

    </html>
  `;

  res.send(fullHTML);
}
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  let fullHTML = getAllTodos();
  res.send(fullHTML);
});

// ---------------------------------------
app.post("/addTodo", (req, res) => {
  let todo = {
    id: no_of_todos + 1,
    title: req.body.todoInput,
    isDone: false,
  };
  todos.push(todo);
  writeToJSON();
  res.redirect("/");
});

app.post("/deleteTodo/:id", (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter((todo) => todo.id !== id);
  writeToJSON();
  res.redirect("/");
});

app.post("/editTodo/:id", editTodoUI, (req, res) => {});

app.post("/saveEditedTodo/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let todo = todos.find((todo) => todo.id === id);
  todo.title = req.body.todoEditedInput;
  writeToJSON();
  res.redirect("/");
});

app.post("/markUnmark/:id", (req, res) => {
  const id = parseInt(req.params.id);
  todos.find((todo) => todo.id === id).isDone = req.body.toggleDone === "on";
  writeToJSON();
  res.redirect("/");
});

app.listen(3300);
