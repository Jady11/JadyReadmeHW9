const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")

const questions = inquirer.prompt([
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
        input: 'input',
        name: 'usage',
        message: 'How do you use the project?'
    },
    {
        input: 'input',
        name: 'install',
        message: 'How do you install this project?'
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
        name: 'githubURL',
        message: 'What is your GitHub user name?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
])
.then((answers) => {
    fs.writeFileSync(`readME.md`, generateMarkdown({...answers}), (err) => {
        if (err) throw err;
        console.log("Success!")
        })
    });  
    
