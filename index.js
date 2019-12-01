const fs = require('fs');
const inquirer = require("inquirer");
const path = require("path");
const generateHTML = require('generateHTML');
const convertFactory = require('electron-html-to');



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
        console.log('Searching...');

        api 
        .getUser(github)
        .then(response => api.getTotalStars(github).then(stars => {
            return generateHTML({
                stars,
                color,
                    response.data
            });
        })
    )
    .then(html => {
        const conversion = convertFactory({
            convertPath: convertFactory.converters.PDF

        })
    })

        
    })
init();
