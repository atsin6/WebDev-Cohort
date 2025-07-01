const { Router } = require("express");
const router = Router();

const { state } = require("../middleware/requestCount.js");

// rout handlers
router.get("/healthy", (req, res) => res.send("I am Healthy"));

router.get("/requestCount", (req, res) => {
  res.send(`Total Number of request made to the server ${state.reqCount}`);
});

module.exports = router;
