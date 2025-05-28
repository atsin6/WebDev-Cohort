function wait1(t) {
  return new Promise((resolve) => {
    setTimeout(resolve, t);
  });
}

function wait2(t) {
  return new Promise((resolve) => {
    setTimeout(resolve, t);
  });
}

function wait3(t) {
  return new Promise((resolve) => {
    setTimeout(resolve, t);
  });
}

// function calculateTime(t1, t2, t3) {
//   let startTime = new Date().getTime();

//   return wait1(t1).then(() => {
//     return wait2(t2).then(() => {
//       return wait3(t3).then(() => {
//         let endTime = new Date().getTime();
//         return endTime - startTime;
//       });
//     });
//   });
// }

function calculateTime(t1, t2, t3) {
  let startTime = new Date().getTime();

  return wait1(t1)
    .then(() => {
      return wait2(t2);
    })
    .then(() => {
      return wait3(t3);
    })
    .then(() => {
      let endTime = new Date().getTime();
      return endTime - startTime;
    });
}

module.exports = calculateTime;
