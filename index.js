#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\tWelcome to Huma's CLI Number Guessaing Game\n");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: "Enter your guessed number(number limit from 1 to 5)",
    },
]);
if (answer.UserGuessedNumber === randomNumber) {
    console.log("Congratulations ! you have guessed the correct number");
}
else {
    console.log("Sorry, you have guessed a wrong number");
}
