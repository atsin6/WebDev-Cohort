// 1. Create a counter in Javascript
// let c = 1;
// function Counter() {
//   console.log(c++);
// }
// setInterval(Counter, 1000);

// 2. Counter without setInterval()
let c = 1;
function Counter() {
  console.log(c++);

  setTimeout(Counter, 1000);
}

Counter();

// 3. Reading the contents of a file
// const fs = require("fs");

// fs.readFile("file.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(data);
//   }
// });

// 4. Write to a file
// const fs = require("fs");

// fs.writeFile("file.txt", "Easy Assigments are completed", "utf-8", (err) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("File written successfull");
//   }
// });
