const fs = require("fs");

let input = fs.readFileSync("file.txt", "utf-8");

console.log(input);
input = input.trim().replace(/\s+/g, " ");
fs.writeFileSync("file.txt", input, "utf8", (err) => {
  if (err) {
    console.error(err);
  }
  console.log("File writing successful");
});
console.log(input);
