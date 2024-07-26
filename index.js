import inquirer from 'inquirer';
// import DatePrompt from 'inquirer-date-prompt';
// inquirer.registerPrompt('date', DatePrompt);
// inquirer.registerPrompt('datetime', require('inquirer-datepicker-prompt'));
import fs from 'fs';

const questions = [ {
    type: 'input',
    message: 'Welcome to my README Generator!  Please refer to the provided README for a template and operating instructions. /nWhat is your name?',
    name: 'author'
},
{
    type: 'input',
    message: 'What is your project title?',
    name: 'title',
},
{
    type: 'input',
    message: 'What is your project description?',
    name: 'descript',
},
{
    type: 'checkbox',
    message: 'What language(s) did your project use?',
    name: 'lang',
    choices: ['HTML', 'CSS', 'Javascript', 'Python', 'Java', 'C#', 'C++', 'Ruby', 'Other']
},
{
    type: 'checkbox',
    message: 'What framework(s) did you use?',
    name: 'frame',
    choices: ['Bootstrap', 'Node.js', 'NPM', 'Libraries', 'API(s)', 'None'],
},
{
    type: 'input',
    message: 'What is your github profile? (Please include the full URL)',
    name: 'git',
},
];

inquirer.prompt(questions)
.then(function(answers){ 
    console.log(`Your name is: ${answers.author}, your project title is: ${answers.title}.`),
    fs.writeFile('./Generator/YOUR-README.md', 
    `Your name is: ${JSON.stringify(answers.author)}
    Your Project: ${JSON.stringify(answers.title)} 
    Coding Languages: ${answers.lang[0]}`,
    // `Frameworks: ${(answers.frame)}`, 
    // `![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](${JSON.stringify(answers.git)})`,
    (err) => err ? console.log(err) :console.log('file written!'))})
    .catch((error) => console.log(error));

// .then((answers) => {
//     fs.writeFile('answers.txt', JSON.stringify(answers), (err) => err ? console.log(err) : console.log('Success!'))

//another way (auto formats into object)
//.fs.writeFile(filename, JSON.stringify(answers, null, '\t')