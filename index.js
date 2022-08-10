const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'project',
            message: 'What is the name of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a short description of your project.',
        },
        {
            type: 'input',
            name: 'install',
            message: 'Enter installation instructions.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter the usage of your application.',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What are your contribution guidelines?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'What are your testing instructions?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license would you like?',
            choices: ['MIT', 'Apache', 'GNU', 'Rust', 'None']
            //need to add a badge for this license at the top of the read me.
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github user name?',
            //this feeds into the questions section of the readme
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },

    ])
    .then((data) => {
        const buildReadMe =
            `# ${data.project}

## Description

 ${data.description}

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)

## Installation

 ${data.install}

## Usage

 ${data.usage}

To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    md
    ![alt text](assets/images/screenshot.png)


## License

  ${data.license}

---

## How to Contribute 

 ${data.contribution}

## Tests 

 ${data.test}

## Questions

Github profile: https://github.com/${data.github}
Feel free to email me with any questions at ${data.email}

        `


        fs.writeFile('./output/README.md', buildReadMe, (error, data) =>
            error ? console.error(error) : console.log("Successful!")
        );
    });