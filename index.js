import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import generateMarkdown from './utils/generateMarkdown.js';
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: (input) => (input ? true : 'Title is required!'),
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description of your project:',
    validate: (input) => (input ? true : 'Description is required!'),
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?',
    validate: (input) => (input ? true : 'Installation instructions are required!'),
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is the usage information?',
    validate: (input) => (input ? true : 'Usage information is required!'),
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What are the contribution guidelines?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What are the test instructions?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
    validate: (input) => (input ? true : 'GitHub username is required!'),
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
    validate: (input) => (input ? true : 'Email is required!'),
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const outputPath = path.join(process.cwd(), 'output');
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath);
  }
  fs.writeFileSync(path.join(outputPath, fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdownContent = generateMarkdown(answers); // Generate the README content
    writeToFile('README.md', markdownContent); // Write the content to a file
    console.log('README.md generated successfully in the output folder!');
  });
}

// Function call to initialize app
init();
