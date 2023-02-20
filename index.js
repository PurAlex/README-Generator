const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = 
// inquirer
//     .prompt(
        [
    {
        message: "What is your GitHub username?",
        type: "input",
        name: "username",
    },
    {
        message: "What is your email address?",
        type: "input",
        name: "email",
    },
    {
        message: "What is the title of your project?",
        type: "input",
        name: "title",
    },
    {
        message: "Write the description of your project.",
        type: "input",
        name: "description",
    },
    {
        message: "What kind of license should your project have?",
        type: "list",
        name: "license",
        choices: ["MIT", "Apache License 2.0", "GNU General Public License v3.0", "BSD-2-Clause", "BSD-3-Clause"],
    },
    {
        message: "What command should be run to install dependencies?",
        type: "list",
        name: 'installation',
        choices: ["npm i"],
    },
    {
        message: 'What command should be run to run tests?',
        type: 'list',
        name: 'test',
        choices: ['npm test'],
    },
    {
        message: 'What does the user need to know about using the repo?',
        type: 'input',
        name: 'usage',
    },
    {
        message: 'What does the user need to know about contributing to the repo?',
        type: 'input',
        name: 'contributing',
    },
];

// function to write README file
function writeToFile(filename,data) {
       fs.writeFile(filename, data, (err) =>{
        err ? console.log(err) : console.log("Success!")
       })

    
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(data =>{
        writeToFile('README.md', generateMarkdown(data));
    });
    
}

// function call to initialize program
init()

