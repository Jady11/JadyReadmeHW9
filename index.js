const inquirer = require('inquirer');
const fs = require('fs');
// const util = require('util');

// const writeFileAsync = util.promisify(fs.writeFile);

// const promptUser = () =>


// array of questions for user
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
        email: 'email',
        message: 'What is your email address?',
    },
])
.then((answers) => {
    console.log("Answers", response)
    const readData = { project, description, license, usage, install, contributors, tests, githubURL, email};
    let readME = `# ${response.title}
    ## Description
    ${response.description}
    
    ## Table of Contents

    * [Installation](#install)
    * [Usage](#usage)
    * [Contributors](#contributors)
    * [License](#license)
    * [Contact](#contact)
    
    ## Installation
    ${response.install}
    ## Usage
    ${response.usage}
    ## Contributors
    ${response.contributors}
    ## Tests
    ${response.tests}
    ## License
    ${response.license}
    ## Contact
    Github Profile: [${response.githubURL}](${response.githubURL})
    Email: [${response.email}](mailto:${response.email})
    `;
}), 
((response) => {
    console.log('Answers', response)
    const readData =
     
    // `# ${response.project}`;

fs.writeFile(`readME.md`, readData, (err) => {
    if (err) throw err;
    console.log("Success!")
    })
});





// function to initialize program
// function init() {

// }

// function call to initialize program
// init();
