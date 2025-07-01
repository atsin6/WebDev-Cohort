let state = {
  reqCount: 0,
};

function logRequestCount(req, res, next) {
  state.reqCount++;
  next();
}

module.exports = { state, logRequestCount };
