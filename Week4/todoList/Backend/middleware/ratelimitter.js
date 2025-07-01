// You have to create a middleware for rate limiting a users request based on their username passed in the header

// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

// ---------
// Because I didn't use user-id for every user so I will find another way to do it
const getLoggedInUser = require("../utils/session.js");
let numberOfRequestsForUser = {};

function ratelimitter(req, res, next) {
  let email = getLoggedInUser();
  console.log(email);
  numberOfRequestsForUser = {
    [email]: [],
  };

  const currentTimestamp = Date.now();

  let timestamps = numberOfRequestsForUser[email].filter(
    (user) => user.email === email
  );
  console.log("No. of Timestamps", timestamps.length);

  // if (noOfTimestamps.length < 5) {
  //   numberOfRequestsForUser.push(currentTimestamp);
  //   next();
  // } else {
  //   res.status(429).JSON({ message: "Too Many Requests" });
  // }
}

setInterval(() => {
  numberOfRequestsForUser = {};
}, 10000);

module.exports = ratelimitter;
