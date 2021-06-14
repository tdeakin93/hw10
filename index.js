const Manager = require("./lib/Manager");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const generateHTML = require("./src/html-template");

const teamMembers = [];

inquirer
  .prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is the team manager's name?",
    },
    {
      type: "input",
      name: "managerId",
      message: "What is the team manager's id?",
    },
    {
      type: "input",
      name: "managerNEmail",
      message: "What is the team manager's email?",
    },
    {
      type: "input",
      name: "managerOfficeNumber",
      message: "What is the team manager's office number?",
    },
  ])
  //answers becomes array of values from above
  .then((answers) => {
    //set variables
    console.log(answers);
    //create manager object - then extend opject to file
    const manager = new Manager(answers.managerId, answers.managerName, answers.managerEmail, answers.managerOfficeNumber)
    console.log(manager);
    // //send variable to template
    // const htmlPageContent = generateHTML(answers);
    // createFile(htmlPageContent);
    // // wtf is going on
  });

function createFile(htmlCode) {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFileSync(outputPath, htmlCode, "utf-8");
}

// createFile();
