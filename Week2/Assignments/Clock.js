const fs = require("fs");

function time() {
  //   console.log(c++);
  let now = new Date();
  console.log(now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds());
  setTimeout(time, 1000);
}
1;
time();

let time = new Time();

// let c = 1;
// function Counter() {
//   console.log(c++);

//   setTimeout(Counter, 1000);
// }

// Counter();
