const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to home");
  }
  if (req.url === "/about") {
    res.end("welcome to about");
  }
  // res.write("Welcome to Server 5000");
  res.end(`
    <p>Oops!</p>
    <a href = "/">Back to Home</a>
    `);
});

server.listen(5001);
