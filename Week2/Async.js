// function sum(a, b) {
//   return a + b;
// }

// let ans = sum("20", 30);
// console.log(ans);

// -----------------
// Find sum from 1 to a number

// -----------------
// const fs = require("fs");

// const data = fs.readFileSync("a.txt", "utf8");
// console.log(data);

// -----------------
// const fs = require("fs");

// const data = fs.readFile("a.txt", "utf8"); // Asynchronously
// console.log(data);

// const data2 = fs.readFileSync("a2.txt", "utf8"); //Synchronously
// console.log(data2);

// -----------------
// function sum(a, b) {
//   return a + b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// function divide(a, b) {
//   return a / b;
// }

// function doOperation(a, b, op) {
//   return op(a, b);
// }

// console.log(doOperation(1, 2, sum));

// -----------------
// const fs = require("fs");

// function print(err, contents) {
//   console.log(contents);
// }
// fs.readFile("a.txt", "utf-8", print); //asynchronously
// fs.readFile("a2.txt", "utf-8", print);
// console.log("But I am first.");

// -----------------
// const fs = require("fs");

// function print(err, contents) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(contents);
//   }
// }
// fs.readFile("a.txt", "utf-8", print);

// console.log("Done!");

// ----------------- It is also asynchronous
// console.log("Hi!");

// function timeout() {
//   console.log("Click the Button!");
// }
// setTimeout(timeout, 5000);

// console.log("Welcome to loupe");

// -----------------

// function timeout() {
//   console.log("Click the Button!");
// }

// console.log("Hi!");

// setTimeout(timeout, 1000);

// console.log("Welcome to loupe");

// let c = 0;
// for (let i = 0; i < 100000000; i++) {
//   c = c + 1;
// }

// console.log("Expensive operation done!");

// -----------------*** Assignment - 1 ***----------------- \\
// Trying to create a promosified version of
// - setTimeout
// - Fetch
// - fs.readFile
