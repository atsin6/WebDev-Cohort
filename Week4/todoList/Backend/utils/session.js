const fs = require("fs");
const path = require("path");

const sessionFile = path.join(__dirname, "session.json");
const usersFile = path.join(__dirname, "../database/user.json");

function getLoggedInUser(userId) {
  let users = JSON.parse(fs.readFileSync(usersFile, "utf-8"));
  let currentUser = users.find((user) => user.id === userId);
  return currentUser;
}

function setLoggedInUser(userId) {
  let obj = {
    userId: userId,
  };
  let sessions = JSON.parse(fs.readFileSync(sessionFile, "utf-8"));
  sessions.push(obj);
  fs.writeFileSync(sessionFile, JSON.stringify(sessions, null, 2));
}

function isSessionExist(userId) {
  let sessions = JSON.parse(fs.readFileSync(sessionFile, "utf-8"));
  let foundSession = sessions.find((session) => session.userId === userId);

  if (foundSession) {
    return true;
  }
  return false;
}

function setLoggedOutUser(userId) {
  let sessions = JSON.parse(fs.readFileSync(sessionFile, "utf-8"));
  let idx = sessions.findIndex((session) => session.userId === userId);
  sessions.splice(idx, 1);
  fs.writeFileSync(sessionFile, JSON.stringify(sessions, null, 2));
}

module.exports = {
  getLoggedInUser,
  setLoggedInUser,
  setLoggedOutUser,
  isSessionExist,
};
