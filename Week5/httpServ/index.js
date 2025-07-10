const express = require("express");

const app = express();

// app.use(express.urlencoded());

app.get("/", (req, res) => {
  console.log("OK");
  res.status(200).json({ message: `Everything is working fine!` });
});

app.get("/sum", function (req, res) {
  let num1 = req.query.a;
  let num2 = req.query.b;
  let result = num1 + num2;

  res.status(200).json({ ans: result });
});

app.get("/subtract", (req, res) => {
  let result = req.query.a - req.query.b;

  res.status(200).json({ ans: result });
});

app.get("/multiply", (req, res) => {
  let result = req.query.a * req.query.b;

  res.status(200).json({ ans: result });
});

app.get("/divide", (req, res) => {
  let result = req.query.a / req.query.b;

  res.status(200).json({ ans: result });
});

app.listen(3000);
