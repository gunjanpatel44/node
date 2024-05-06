// //os module
// const os = require("os");
// console.log(os.hostname());

// //info about current user
// const user = os.userInfo();
// console.log(user);

// //method returns the system uptime in seconds
// // console.log(`The system uptime is ${os.uptime()} seconds`);

// const currentOS = {
//   name: os.type(),
//   release: os.release(),
//   totalmem: os.totalmem(),
//   freemem: os.freemem(),
// };
// console.log(currentOS);

//path module
// const path = require("path");

// console.log(path.sep);
// const filePath = path.join('/content/','subfolder','test.txt');
// console.log(filePath);

// const base = path.basename(filePath);
// console.log(base);

// const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
// console.log(absolute);

//fs module
const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  {
    flag: "a",
  }
);
