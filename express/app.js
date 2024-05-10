console.log("Express Tutorial");
const http = require("http");
const { readFileSync } = require("fs");
const homePage = readFileSync("./index.html");

const navbar = readFileSync("./navbar-app/index.html");
const homeImage = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/browser-app.js");
const homeStyles = readFileSync("./navbar-app/styles.css");

const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.method);

  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(navbar);
    res.write(homePage);
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About Page<h1>");
    res.end();
  } else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyles);
    res.end();
  } else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeLogic);
    res.end();
  } else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homeImage);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.write("404 URL not found");
    res.end();
  }
});

server.listen(5002);
