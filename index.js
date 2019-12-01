const inquirer = require("inquirer");
const path = require("path");


const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your Github username?"
  },
  {
    type: "list",
    name: "color",
    message: "What is favourite color?",
    choices: ["red", "blue", "green", "pink", "violet", "indigo"]
  }
];

function writeToFile(fileName, data) {
  return fs.writeToFile(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(questions).then(({github, color}) => {
        console.log('Searching...')
    })
init();
