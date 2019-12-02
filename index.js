// const fs = require("fs");
// const path = require("path");
// const inquirer = require("inquirer");
// const open = require("open");
// const convertFactory = require("electron-html-to");
// const api = require("./api");
// const generateHTML = require("./generateHTML");

// const questions = [
//   {
//     type: "input",
//     name: "github",
//     message: "What is your Github username?"
//   },
//   {
//     type: "list",
//     name: "color",
//     message: "What is your favourite color?",
//     choices: ["red", "blue", "green", "pink"]
//   }
// ];

// function writeToFile(fileName, data) {
//     return fs.writeFileSync(path.join(process.cwd(), fileName), data);
// }

// function init() {
//     inquirer.prompt(questions).then(({ github, color }) => {
//         console.log("Searching...");

//         api
//             .getUser(github)
//             .then(response =>
//                 api.getTotalStars(github).then(stars => {
//                     return generateHTML({
//                         stars,
//                         color,
//                            response.data
//                 });
//             })
//         )
//         .then(html => {
//             const conversion = convertFactory({
//             converterPath: convertFactory.converters.PDF
//             });

//             conversion({ html }, function(err, result) {
//                 if (err) {
//                     return console.error(err);
//                 }
//                 result.stream.pipe(
//                 fs.createWriteStream(path.join(__dirname, "VikramMCV.pdf"))
//                 );
//                 conversion.kil();
//             });
//             open(path.join(process.cwd(), "VikramMCV.pdf"));
//         });
//   });
// }
// init();

const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const open = require("open");
const convertFactory = require("electron-html-to");
const api = require("./api");
const generateHTML = require("./generateHTML");

const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your Github username?"
  },
  {
    type: "list",
    name: "color",
    message: "What is your favorite color?",
    choices: ["red", "blue", "green", "pink"]
  }
];

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquirer.prompt(questions).then(({ github, color }) => {
    console.log("Searching...");

    api
      .getUser(github)
      .then(response =>
        api.getTotalStars(github).then(stars => {
          return generateHTML({
            stars,
            color,
            ...response.data
          });
        })
      )
      .then(html => {
        const conversion = convertFactory({
          converterPath: convertFactory.converters.PDF
        });

        conversion({ html }, function(err, result) {
          if (err) {
            return console.error(err);
          }
          result.stream.pipe(
            fs.createWriteStream(path.join(__dirname, "VikramMCV.pdf"))
          );
          conversion.kill();
        });
        open(path.join(process.cwd(), "VikramMCV.pdf"));
      });
  });
}
init();
