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

function calculateTime(t1, t2, t3) {
  let startTime = new Date().getTime();
  return Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then((values) => {
    let endTime = new Date().getTime();
    return endTime - startTime;
  });
}

//From 100xDevs using Async Await
// async function calculateTime(t1, t2, t3) {
//   const startTime = Date.now();

//   await Promise.all([wait1(t1), wait2(t2), wait3(t3)]);

//   const totalTime = Date.now() - startTime;
//   return totalTime;
// }

module.exports = calculateTime;
