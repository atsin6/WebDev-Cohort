const { getLoggedInUser } = require("../utils/session.js");
let { readUsers } = require("../database/index.js");

function checkLogin(req, res, next) {
  let userId = req.params.userId;
  const user = getLoggedInUser(userId);
  let email = user.email;
  if (!email) {
    return res.status(401).send("You must be logged in");
  }

  //   req.email = email;
  req.user = readUsers().find((user) => user.email === email);
  next();
}

module.exports = checkLogin;
