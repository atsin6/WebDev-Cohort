const fs = require("fs");
const path = require("path");

const sessionFile = path.join(__dirname, "session.json");

function setLoggedInUser(email) {
  let obj = {
    email: email,
  };
  let sessions = JSON.parse(fs.readFileSync(sessionFile, "utf-8"));
  sessions.push(obj);
  fs.writeFileSync(sessionFile, JSON.stringify(sessions, null, 2));
}

function isSessionExist(email) {
  let sessions = JSON.parse(fs.readFileSync(sessionFile, "utf-8"));
  let foundSession = sessions.find((session) => session.email === email);

  if (foundSession) {
    return true;
  }
  return false;
}

function setLoggedOutUser(email) {
  let sessions = JSON.parse(fs.readFileSync(sessionFile, "utf-8"));
  let idx = sessions.findIndex((session) => session.email === email);
  sessions.splice(idx, 1);
  fs.writeFileSync(sessionFile, JSON.stringify(sessions, null, 2));
}

module.exports = { setLoggedInUser, setLoggedOutUser, isSessionExist };
