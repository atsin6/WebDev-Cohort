import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const sessions = [];

let __filepath = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filepath);
let sessionsDataFile = path.join(__dirname, "./sessions.json");

export function isSessionExist(userId) {
  const sessions = JSON.parse(fs.readFileSync(sessionsDataFile, "utf-8"));
  if (sessions.find((session) => session.userId === userId)) {
    return true;
  }
  return false;
}
