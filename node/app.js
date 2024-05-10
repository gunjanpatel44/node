//Import
// const names = require('./names');
// const sayHi = require('./utils');
// const data = require('./alt-flavours');
// require('./mind-grenade');
// const { result } = require("lodash");

const { readFile, writeFile } = require("fs").promises

// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);


// console.log(names);
// sayHi("Susan");
// sayHi(names.john);
// sayHi(names.peter);
// console.log(data);

// const hello = "Gunjan";
// console.log(hello);

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile("./content/first.txt", "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err)); 

const start = async () => {
  try {
    const first = await readFile("./content/first.txt","utf8");
    const second = await readFile("./content/second.txt","utf8");

    await writeFile("./content/result-sync.txt", `This is await server ${first} ${second}`)
    console.log(first,second);
  } catch (error) {
    console.log(error);
  }
};

start();
