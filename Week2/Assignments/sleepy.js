// function sleep(ms) {
//   return new Promise((resolve) => {
//     let d = new Date();
//     let cms = d.getTime();

//     let c = cms;
//     while (c <= cms + ms + 1) {
//       console.log(c++);
//     }
//     console.log("------End-------");
//     resolve();
//   });
// }

function sleep(ms) {
  return new Promise((resolve) => {
    let startTime = new Date().getTime();
    while (new Date().getTime() < startTime + ms) {}
    console.log("------End-------");
    resolve();
  });
}

// function callback() {
//   console.log("Freez");
// }
// sleep(1000).then(callback);

// console.log("End");

module.exports = sleep;
