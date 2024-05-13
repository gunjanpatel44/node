const port = 5001;
const express = require("express");
const app = express();
const people = require("./routes/people.js")
const auth = require("./routes/auth.js")

// static assets
app.use(express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());
//use Router
app.use('/api/people',people) //for people route
app.use('/login',auth) //for auth route


app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
