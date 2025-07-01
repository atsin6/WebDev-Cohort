const { Router } = require("express");
const router = Router();
const bcrypt = require("bcryptjs");
const { nanoid } = require("nanoid");

let { users, readUsers, writeUsers } = require("../database/index.js");
const {
  setLoggedInUser,
  setLoggedOutUser,
  isSessionExist,
} = require("../utils/session.js");

// router.get("/getAllUsers", (req, res) => {
//   users = readUsers();
//   console.log(users);
//   res.status(200).json({ message: "All users ", data: `${users}` });
// });

router.post("/signup", async (req, res) => {
  let userSignupData = req.body;
  let email = userSignupData.email;

  users = readUsers();
  if (users.find((user) => user.email === email)) {
    res.status(409).json({ message: `${email} already exist.` });
  }

  let username = userSignupData.email.split("@")[0];
  userSignupData.username = username;
  userSignupData.id = nanoid();

  let todo = [];
  userSignupData.todo = todo;

  try {
    let password = userSignupData.password;

    // Generate a salt (random string) to add to the password before hashing
    // The '10' represents the number of salt rounds, which affects the computational cost
    const salt = await bcrypt.genSalt(10);

    // Hash the password with the generated salt
    const hashedPassword = await bcrypt.hash(password, salt);

    // Now, store the hashedPassword in your database
    // Do NOT store the original plain-text password
    // Example: await User.create({ username, password: hashedPassword }
    userSignupData.password = hashedPassword;

    //Writing data to userData file
    users.push(userSignupData);
    writeUsers();

    res.status(201).send("User registered successfully");
  } catch (error) {
    console.error("Error hashing password:", error);
    res.status(500).send("Server error");
  }
  // -----
});

router.post("/login", async (req, res) => {
  let { email, password } = req.body;
  try {
    users = readUsers();
    let user = await users.find((user) => user.email === email);
    let userId = user.id;

    const storedHashedPassword = user.password;
    const isMatch = await bcrypt.compare(password, storedHashedPassword);

    const sessionCheck = isSessionExist(userId);

    if (isMatch && !sessionCheck) {
      setLoggedInUser(userId);
      res.status(200).send({ message: "Login successful!" });
    } else if (isMatch && sessionCheck) {
      res.status(200).send({ message: "You are already loggedIn!" });
    } else {
      res.status(500).send({ message: "Invalid credentials!" });
    }
  } catch (err) {
    console.error(`Error during login: ${err}`);
    res.status(500).send({ message: `Server error` });
  }
});

router.post("/logOut/:userId", (req, res) => {
  let userId = req.params.userId;

  try {
    if (isSessionExist(userId)) {
      setLoggedOutUser(userId);
      res.status(200).send({ message: "LogOut successful!" });
    } else {
      res.status(400).send({ message: "You are not loggedIn!" });
    }
  } catch (err) {
    console.error(`Error during login: ${err}`);
    res.status(500).send({ message: `Server error` });
  }
});
module.exports = router;
