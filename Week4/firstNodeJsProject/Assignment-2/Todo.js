const fs = require("fs");
const { Command } = require("commander");

const program = new Command();
const filepath = "file.json";

program
  .name("Todo")
  .description("This program is used to add as a ")
  .version("0.0.1");

program
  .command("add")
  .description("add a todo into JSON file.")
  .argument("<string>", "Todo to add into the file")
  .action((str) => {
    let content = fs.readFileSync(filepath, "utf-8");
    let jsObject = JSON.parse(content);
    let newObject = {
      todo: str,
      isDone: false,
    };
    jsObject.push(newObject);
    content = JSON.stringify(jsObject);

    fs.writeFileSync(filepath, content, "utf-8");
    console.log("Todo Added.");
    view();
  });

program
  .command("delete")
  .description("delete a todo from JSON file.")
  .argument("<number>", "Todo no to be deleted from the file")
  .action((number) => {
    let content = fs.readFileSync(filepath, "utf-8");
    let jsObject = JSON.parse(content);
    jsObject.splice(number - 1, 1);
    content = JSON.stringify(jsObject);

    fs.writeFileSync(filepath, content, "utf-8");
    console.log("Todo deleted.");
    view();
  });

function view(filepath = "file.json") {
  let content = fs.readFileSync("file.json", "utf-8");
  let jsObject = JSON.parse(content);
  console.log("-----Todos-----");
  console.log("\n");
  for (let i = 0; i < jsObject.length; i++) {
    console.log(i + 1 + ". " + jsObject[i].isDone + " | " + jsObject[i].todo);
  }
  console.log("\n");
  console.log("Commands:");
  console.log("  add <string>            add a todo into JSON file.");
  console.log("  delete <number>         delete a todo from JSON file.");
  console.log("  view                    View All Todos");
  console.log("  markdone <number>       Mark a particular todo as done.");
  console.log("  unmarkdone <number>     Mark a particular todo as done.");
  console.log("  toggle <number>         Mark a particular todo as done.");
  console.log("  edit <number> <string>  Edit a particular todo.");
  console.log("  help [command]          display help for command");
}
program
  .command("view")
  .description("View All Todos")
  .action(() => {
    view();
  });

program
  .command("markdone")
  .description("Mark a particular todo as done.")
  .argument("<number>", "Number of the todo that should be marked done.")
  .action((number) => {
    let content = fs.readFileSync("file.json", "utf-8");
    let jsObject = JSON.parse(content);
    jsObject[number - 1].isDone = true;
    content = JSON.stringify(jsObject);
    fs.writeFileSync(filepath, content, "utf-8");
    view();
  });

program
  .command("unmarkdone")
  .description("Mark a particular todo as done.")
  .argument("<number>", "Number of the todo that should be unmarked done.")
  .action((number) => {
    let content = fs.readFileSync("file.json", "utf-8");
    let jsObject = JSON.parse(content);
    jsObject[number - 1].isDone = false;
    content = JSON.stringify(jsObject);
    fs.writeFileSync(filepath, content, "utf-8");
    view();
  });

program
  .command("toggle")
  .description("Mark a particular todo as done.")
  .argument(
    "<number>",
    "Number of the todo that should be toggle its done state."
  )
  .action((number) => {
    let content = fs.readFileSync("file.json", "utf-8");
    let jsObject = JSON.parse(content);
    jsObject[number - 1].isDone = !jsObject[number - 1].isDone;
    content = JSON.stringify(jsObject);
    fs.writeFileSync(filepath, content, "utf-8");
    view();
  });

program
  .command("edit")
  .description("Edit a particular todo.")
  .argument("<number>", "Number of the todo that should be edited.")
  .argument("<String>", "Edited input for todo.")
  .action((number, str) => {
    let content = fs.readFileSync(filepath, "utf-8");
    let jsObject = JSON.parse(content);
    jsObject[number - 1].todo = str;
    content = JSON.stringify(jsObject);

    fs.writeFileSync(filepath, content, "utf-8");
    console.log("Todo Edited.");
    view();
  });

program.parse();
