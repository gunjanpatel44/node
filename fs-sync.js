const { readFile, writeFile } = require("fs");
console.log("start");
readFile("./content/first.txt", "utf-8", (err, firstResult) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(firstResult);
  const first = firstResult;

  readFile("./content/second.txt", "utf-8", (err, secondResult) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(firstResult);
    const second = secondResult;
    
    const resultContent = `Here is the result : ${first}, ${second}`;
    writeFile(
      "./content/result-sync.txt",
      resultContent,
      { flag: "a" },
      (err) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Result has been written to result-sync.txt");
      }
    );
  });
});
console.log("task ended");
