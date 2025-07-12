import Router from "express";
const router = Router();

import { nanoid } from "nanoid";
import bcrypt from "bcrypt";
import { getUsersData, writeUsersData } from "../database/usersAuthdata.js";
import {
  validateSignupData,
  validateSigninData,
} from "../middleware/validateSignupData.js";
import { isSessionExist } from "../util/sessions.js";

router.get("/isworking", (req, res) => {
  res.send(`authRouter is working!`);
});

router.post("/signup", validateSignupData, async (req, res) => {
  let userSignupData = req.body;
  let email = userSignupData.email;

  userSignupData.username = email.split("@")[0];
  userSignupData.id = nanoid();

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userSignupData.password, salt);
    userSignupData.password = hashedPassword;

    writeUsersData(userSignupData);
    res.status(200).json({ message: `User Registered`, data: userSignupData });
  } catch (err) {
    console.error(`Error hashing password`);
    res.status(500).json({ message: `Server Error` });
  }
});

router.post("/signin", validateSigninData, async (req, res) => {
  let { email, password } = req.body;

  try {
    let users = getUsersData();
    let idx = users.findIndex((user) => user.email === email);
    let user = users[idx];
    const isMatch = await bcrypt.compare(password, user.password);
    const sessionCheck = isSessionExist(user.id);
    if (isMatch && !sessionCheck) {
      res.status(200).json({ message: `You are successfully LoggedIn` });
    } else if (isMatch && sessionCheck) {
      res.status(200).json({ message: `You are LoggedIn` });
    } else {
      res.status(500).json({ message: `Password Invalid!` });
    }
  } catch (err) {
    console.error(`Email or password are not valid!`);
    res.status(500).json({ message: `SERVER ERROR` });
  }
});

// router.post("/signout");

export default router;
