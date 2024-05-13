const express = require("express");
const app = express();
const logger = require("./logger.js");
const authorize = require("./authorize.js");
const morgan = require("morgan");

// req => middleware => res

// app.use([logger, authorize]);
// app.use(express.static('./public'));
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("Item");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.listen(5001, () => {
  console.log("Server is listening on Port 5001");
});
