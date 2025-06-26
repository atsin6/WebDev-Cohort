const fs = require("fs");
const path = require("path");
require("dotenv").config();

// -------------------------------
let users = [];
const userFilePath = path.resolve(__dirname, "./user.json");

function readUsers() {
  let usersData = fs.readFileSync(userFilePath, "utf-8");
  users = JSON.parse(usersData);
  return users;
}
function writeUsers() {
  let userObj = JSON.stringify(users, null, 2);
  fs.writeFileSync(userFilePath, userObj, "utf-8");
}

module.exports = {
  users,
  readUsers,
  writeUsers,
};
