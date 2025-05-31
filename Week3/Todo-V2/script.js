const inputEle = document.querySelector("#todo-input");
inputEle.classList.add("input-ele");

let todos = [
  {
    title: "Make Todo list project.",
    checkbox: true,
  },
];

render();
let no_of_todos = 1;

function addTodo() {
  const value = inputEle.value.trim();
  if (value === "") return;

  todos.push({
    todo_no: ++no_of_todos,
    title: value,
    checkbox: false,
  });
  render();

  inputEle.value = "";
}

function deleteTodo(idx) {
  todos.splice(idx, 1);
  render();
}

function editTodo(index) {
  let editedInput = document.createElement("input");
  editedInput.classList.add("input-ele");
  editedInput.value = todos[index].title;

  let titleEL = document.querySelector("#todo-span-" + index);
  console.log(titleEL);

  titleEL.parentNode.replaceChild(editedInput, titleEL);

  editedInput.focus();
  editedInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      todos[index].title = editedInput.value;
      render();
    }
  });
}

function render() {
  //   console.log("rendering");

  let todosEL = document.querySelector("#todos");
  todosEL.replaceChildren();

  for (let i = 0; i < todos.length; i++) {
    todosEL.appendChild(createTodoComponenet(i));
  }
}

function createTodoComponenet(i) {
  let todo = todos[i];

  let todoDivEl = document.createElement("div");
  todoDivEl.setAttribute("id", "todo-div-" + i);
  todoDivEl.setAttribute("class", "todo-div");

  //---------------
  let labelEl = document.createElement("label");
  let inputEl = document.createElement("input");
  let title_spanEl = document.createElement("span");
  let btn_divEl = document.createElement("div");
  let editBtnEl = document.createElement("button");
  let editImg = document.createElement("img");
  let deleteBtnEl = document.createElement("button");
  let deleteImg = document.createElement("img");

  labelEl.setAttribute("for", "todo-" + i);
  labelEl.setAttribute("id", "todo-label-" + i);
  inputEl.setAttribute("type", "checkbox");
  inputEl.setAttribute("id", "todo-" + i);

  inputEl.addEventListener("change", (event) => {
    let idx = event.currentTarget.id;
    idx = idx.split("-")[1];
    if (inputEl.checked) {
      todos[idx].checkbox = true;
      render();
    } else if (!inputEl.checked) {
      todos[idx].checkbox = false;
      render();
    }
  });

  title_spanEl.innerHTML = i + 1 + ". " + todo.title;
  title_spanEl.setAttribute("id", "todo-span-" + i);

  if (todo.checkbox == true) {
    inputEl.checked = true;
    title_spanEl.classList.add("lineThrough");
  } else {
    inputEl.checked = false;
    title_spanEl.classList.remove("lineThrough");
  }
  title_spanEl.innerHTML = i + 1 + ". " + todo.title;

  btn_divEl.setAttribute("id", "btn-div");

  editImg.setAttribute("src", "pen.png");
  editImg.classList.add("btn-img");

  deleteImg.setAttribute("src", "x-mark.png");
  deleteImg.classList.add("btn-img");
  deleteImg.setAttribute("alt", "Delete");

  editBtnEl.setAttribute("onclick", "editTodo(" + i + ")");
  editBtnEl.appendChild(editImg);
  deleteBtnEl.setAttribute("onclick", "deleteTodo(" + i + ")");
  deleteBtnEl.appendChild(deleteImg);

  labelEl.appendChild(inputEl);
  labelEl.appendChild(title_spanEl);
  btn_divEl.appendChild(editBtnEl);
  btn_divEl.appendChild(deleteBtnEl);
  todoDivEl.appendChild(labelEl);
  todoDivEl.appendChild(btn_divEl);

  return todoDivEl;
}
