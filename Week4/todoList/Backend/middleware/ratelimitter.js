let numberOfRequestsForUser = {};

function ratelimitter(req, res, next) {
  let userId = req.params.userId;
  if (numberOfRequestsForUser[userId] === undefined) {
    numberOfRequestsForUser[userId] = [];
  }

  const currentTimestamp = Date.now();

  numberOfRequestsForUser[userId] = numberOfRequestsForUser[userId].filter(
    (ts) => currentTimestamp - ts < 1000
  );

  if (numberOfRequestsForUser[userId].length < 5) {
    numberOfRequestsForUser[userId].push(currentTimestamp);
    next();
  } else {
    res.status(429).json({ message: "Too Many Requests" });
  }
}

module.exports = ratelimitter;
