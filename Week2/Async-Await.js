function setTimeoutPromisified(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

async function solve() {
  await setTimeoutPromisified(1000);
  console.log("Hi hello choro");

  await setTimeoutPromisified(1500);
  console.log("Hare Krishna");

  await setTimeoutPromisified(2000);
  console.log("Bolo");
}

solve();

// console.log("samajh aayi meri baat");
