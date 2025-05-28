// Q1 Promisified SetTimeout()

// original setTimeout
// setTimeout(() => {
//   console.log("Billu");
// }, 1000);

// My answer
function promisifiedSetTimeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function callback() {
  console.log("Billu");
}
promisifiedSetTimeout(1000).then(callback);

// Claude alternatives or better approaches
// function promisifiedSetTimeout(ms) {
//   return new Promise((resolve, reject) => {
//     if (ms < 0) {
//       reject(new Error("Delay cannot be negative"));
//       return;
//     }
//     setTimeout(resolve, ms);
//   });
// }

// function promisifiedSetTimeout(ms) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(ms), ms);
//   });
// }
// promisifiedSetTimeout(1000).then((value) => {
//   console.log(value); // This will print: 1000
// });
