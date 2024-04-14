#! usr/bin/env node 
console.log(chalk.blueBright("WELCOME TO CLI-BASED ATM "));
console.log(chalk.blueBright("Pin code for this ATM is: 1001"));
const myPin = 1001;
let myBalance = 25000;
import chalk from "chalk";
import inquirer from "inquirer";
let pinAns = await inquirer.prompt([
    { name: "Pin", type: "number", message: "Please enter your Pin code" },
]);
if (pinAns.Pin === myPin) {
    console.log(chalk.green("Correct Pin Code!"));
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Please select one",
            choices: ["Fash Cash", "Withdrawl", "Balance Inquiry"],
        },
    ]);
    if (operationAns.operation === "Fash Cash") {
        let answer = await inquirer.prompt({
            name: "fastcash",
            type: "list",
            message: "Please Select your amount",
            choices: ["1,000", "2,000", "5,000", "10,000"],
        });
        let newBalance = myBalance - 1000;
        if (answer.fastcash === "1,000") {
            console.log("Your new balance is: " + " " + chalk.green.bold(newBalance));
        }
        newBalance = myBalance - 2000;
        if (answer.fastcash === "2,000") {
            console.log("Your new balance is: " + " " + chalk.green.bold(newBalance));
        }
        newBalance = myBalance - 5000;
        if (answer.fastcash === "5,000") {
            console.log("Your new balance is: " + " " + chalk.green.bold(newBalance));
        }
        newBalance = myBalance - 10000;
        if (answer.fastcash === "10,000") {
            console.log("Your new balance is: " + " " + chalk.green.bold(newBalance));
        }
    }
    if (operationAns.operation === "Withdrawl") {
        let withAns = await inquirer.prompt({
            name: "withdrawl",
            type: "number",
            message: "Please enter the amount you want to withdraw",
        });
        if (withAns.withdrawl <= 25000) {
            console.log("Your new balance is:" + " " + (chalk.green.bold(myBalance - withAns.withdrawl)));
        }
        else
            console.log(chalk.bgRedBright("Insufficient Fund!"));
    }
    if (operationAns.operation === "Balance Inquiry") {
        console.log("Your Current balance is:" + " " + chalk.greenBright.bold(myBalance));
    }
}
else
    console.log(chalk.redBright("Incorrect Pin code!!"));
