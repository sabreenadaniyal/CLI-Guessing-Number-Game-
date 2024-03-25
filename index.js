#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome to Number Guessing Game");
const answer = await inquirer.prompt([
    { name: "userGuessedNumber", type: "number", message: "Please guess a number between 1-6", },
]);
//conditional statement
if (answer.userGuessedNumber === randomNumber) {
    console.log(chalk.yellowBright("CONGRATULATIONS! you Win"));
}
else {
    console.log(chalk.red("Sorry! you loose"));
}
