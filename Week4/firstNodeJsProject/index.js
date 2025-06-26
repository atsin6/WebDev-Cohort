import chalk from "chalk";
// const chalk = require('chalk');
const log = console.log;

log(chalk.bgRed.blue.bold("Hello World!"));
log(chalk.red.bold("How's the Josh"));
log(chalk.green.underline("High Sir!!!"));

log(
  chalk.green(
    "I am a green line " +
      chalk.blue.underline.bold("with a blue substring") +
      " that becomes green again!"
  )
);
log(chalk.red("Hello", chalk.underline("world") + "!"));
