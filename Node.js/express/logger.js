function middlewareLogger(req, res, next) {
  //middleware function in case wee need to authenticate do middle stuff with the request
  console.log("Prepering for Authenticating.....", req.body);
  next();
}

module.exports = middlewareLogger;
