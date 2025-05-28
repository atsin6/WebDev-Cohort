const sleep = require("./sleepy");
const calculateTime = require("./PromiseAll");
const calculateTime2 = require("./PromiseChain");

//1
// sleep(10000).then(() => console.log("Waited 10 second"));
// function callback() {
//   console.log("Freez");
// }
// sleep(1000).then(callback);

// console.log("End");

//2
// calculateTime(1000, 2000, 3000).then((data) => console.log(data + "ms"));
// console.log("---------");

//3
calculateTime2(1000, 2000, 3000).then((data) => console.log(data + "ms"));
console.log("---------");
