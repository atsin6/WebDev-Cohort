const dotenv = require("dotenv");
dotenv.config();

const API_KEY = process.env.API_KEY;

function authenticateAPIKey(req, res, next) {
  //  authenticate APIKey here
  let apiKey = req.headers["api-key"];

  if (apiKey === API_KEY) {
    next();
  } else {
    res
      .status(401)
      .json({ message: "Unauthorized: API key missing or invalid." });
  }
}

module.exports = authenticateAPIKey;
