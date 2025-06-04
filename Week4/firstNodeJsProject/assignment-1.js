import { Command } from "commander";
const program = new Command();

function countWords(str) {
  return str.trim().split(/\s+/).length;
}
function countWordswithoutNum(str) {
  return str
    .trim()
    .split(/\s+/)
    .filter((word) => isNaN(word)).length;
}

program
  .name("assignment-1")
  .description("Assignment-1 of Week-4 of Web-Dev Cohort-3.")
  .version("0.0.1");

program
  .command("count-words")
  .description("Count the words of string and display the number on console")
  .argument("<string>", "string to count words")
  .option("--cow", "--countOnlyWords", "Does not count numbers as words")
  .action((str, options) => {
    const choice = options.countOnlyWords ? 1 : undefined;
    if (choice === 1) {
      let no_of_words = countWordswithoutNum(str);
      console.log(no_of_words);
    } else {
      let no_of_words = countWords(str);
      console.log(no_of_words);
    }
  });

program.parse();
