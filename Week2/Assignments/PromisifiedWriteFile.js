// PromisifedWriteFile()

// const fs = require("fs");

// Original fs.writefile()
// fs.writeFile("file2.txt", "Writing the data in file2.txt", "utf8", (err) => {
//   if (err) {
//     console.error("Error reading file:", err);
//     return;
//   } else {
//     console.log("File written successfull");
//   }
// });

const fs = require("fs");
function PromisifiedWriteFile(path, data, encoding = "utf8") {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, encoding, (err) => {
      if (err) {
        reject(err);
      } else {
        // resolve(console.log("File written successful!"));// It is not correct method
        resolve({ path, message: "File written successfully!" });
      }
    });
  });
}

let path = "file2.txt";
let data = "Writing file2 using PromisifiedWriteFile() function.";
PromisifiedWriteFile(path, data)
  .then((data) => console.log(data.message))
  .catch((err) => console.error("Fetch error: ", err));
