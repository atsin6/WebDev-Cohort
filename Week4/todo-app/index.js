const express = require("express");

const app = express();

//function that returns a boolean if the age of the person is more than 13
function isOldEnough(age) {
  if (age >= 13) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.age;
  if (age >= 13) {
    next();
  } else {
    res.status(411).json({
      msg: "Sorry you are not of age yet",
    });
  }
}

app.use(isOldEnoughMiddleware);

app.get("/ride1", (req, res) => {
  res.json({
    msg: "You have successfully riden the ride 1.",
  });
});

app.get("/ride2", (req, res) => {
  res.json({
    msg: "You have successfully riden the ride 2.",
  });
});

app.listen(3000);
