const { writeFileSync } = require("fs");
for (let i = 0; i < 10000; i++) {
  writeFileSync("./content/big-data.txt", `Hello World ${i}\n`, { flag: "a" });
}
console.log("Create a large file with big data of 10000 lines");
