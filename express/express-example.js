const express = require("express");
const app = express();
const path = require("path");

// setup static and middleware
app.use(express.static("./public"));

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
//   addding to static assests
//   SSR (Server side rendering)
// });
// No need to use this code and just public folder will get all the files that are used by index.html

app.listen(5001, () => {
  console.log("Server is listening on 5001");
});
