const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT;
const todoRoutes = require("./Backend/routes/todo");
const userRoutes = require("./Backend/routes/user");
const checkLogin = require("./Backend/middleware/user.js");
const ratelimitter = require("./Backend/middleware/ratelimitter.js");
const { logRequestCount } = require("./Backend/middleware/requestCount.js");
const adminRoutes = require("./Backend/routes/admin.js");
const authenticateAdmin = require("./Backend/middleware/checkAdmin.js");
const logIncomingRequests = require("./Backend/middleware/logRequests.js");

app.use(express.json());
app.use(logRequestCount);
app.use(logIncomingRequests);
app.use("/admin", authenticateAdmin, adminRoutes);
app.use("/user", userRoutes);
app.use("/:userId", ratelimitter);
app.use("/:userId/todos", checkLogin, todoRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
