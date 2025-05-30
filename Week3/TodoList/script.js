let no_of_todos = 4;

// ------------------- Add Todo button -------------------
function addTodo() {
  no_of_todos++;
  const inputEl = document.querySelector("#add-todo-input");
  const value = inputEl.value;

  let newEntry = document.createElement("div");
  newEntry.classList.add("todo-container-" + no_of_todos, "todo-div");

  let todoDetails = document.createElement("h4");
  todoDetails.classList.add("todo", "todo-" + no_of_todos);
  todoDetails.innerHTML = no_of_todos + ". " + value;

  let btnsDiv = document.createElement("div");
  btnsDiv.classList.add("btns-div");

  let deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("id", "btn");
  deleteBtn.innerHTML = "delete";
  deleteBtn.setAttribute("onclick", "deleteTodo(" + no_of_todos + ")");

  let editBtn = document.createElement("button");
  editBtn.setAttribute("id", "btn");
  editBtn.innerHTML = "edit";
  editBtn.setAttribute("onclick", "editTodo(" + no_of_todos + ")");

  document.querySelector("#todos").appendChild(newEntry);
  newEntry.appendChild(todoDetails);
  newEntry.appendChild(btnsDiv);

  btnsDiv.appendChild(editBtn);
  btnsDiv.appendChild(deleteBtn);

  inputEl.value = "";
}

// ------------------- Delete Todo button -------------------
function deleteTodo(index) {
  let element = document.querySelector(".todo-container-" + index);
  element.parentNode.removeChild(element);
}

// ------------------- Edit Todo button -------------------
function editTodo(index) {
  let editedInput = document.createElement("input");
  let todo_str = ".todo-" + index;
  let todo = document.querySelector(todo_str);
  editedInput.value = todo.innerHTML.slice(3);

  let element = document.querySelector(".todo-container-" + index);
  element.replaceChild(editedInput, todo);

  editedInput.focus();

  editedInput.addEventListener("keydown", (event) => {
    let key = event.key;
    console.log(`Key pressed: ${key}`);
    if (event.key === "Enter") {
      let newInput = editedInput.value;

      let savingNewInput = document.createElement("h4");
      savingNewInput.classList.add("todo", "todo-" + index);
      savingNewInput.innerHTML = index + ". " + newInput;

      editedInput.replaceWith(savingNewInput);
    }
  });
}

// ------------------- Clock -------------------

// function clock_running() {
//   let date = new Date();
//   let hr = date.getHours();
//   let min = date.getMinutes();
//   let sec = date.getSeconds();

//   let time = hr + ":" + min + ":" + sec;
//   let clock = document.querySelector("#time");
//   clock.innerHTML = time;
// }

// setInterval(clock_running, 1000);
