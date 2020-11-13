const inquirer = require('inquirer');
const fs = require('fs');
// const util = require('util');

// const writeFileAsync = util.promisify(fs.writeFile);

// const promptUser = () =>


// array of questions for user
const questions = inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'project',
        message: 'What is your project name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project:',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['Apache 2.0', 'MIT', 'GNU GPL v3.0'],
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'List any tests for this project:'
    },
    {
        type: 'input',
        name: 'gitHubURL',
        message: 'what is your GitHub user name?',
    },
    {
        type: 'input',
        email: 'email',
        message: 'What is your email address?',
    },
])

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
