// Q3 PromisifiedReadFile()

// Original fs.readfile()
// const fs = require("fs");

// fs.readFile("file.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error("Error reading file:", err);
//     return;
//   }
//   console.log("File contents:", data);
// });

const fs = require("fs");
function PromisifiedReadFile(file, encoding = "utf8") {
  return new Promise((resolve, reject) => {
    fs.readFile(file, encoding, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

PromisifiedReadFile("file.txt")
  .then((data) => console.log(data))
  .catch((err) => console.error("Fetch Error:", err));
