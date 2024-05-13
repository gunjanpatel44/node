const authorize = (req, res, next) => {
  const { user } = req.query;
  console.log("Authorise middleware called");
  if (user == "John") {
    req.user = { name: "John", id: 4 };
    next();
  } else {
    res.status(401).send("<h1>Unauthorised user</h1>");
    next();
  }
};

module.exports = authorize;
