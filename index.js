const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
let teamMembers = [];

const menuQuestions = [
    {
        type: 'list',
        name: 'choice',
        message: 'Which team member would you like to add?',
        choices: ['intern', 'engineer', 'done']
    }
];

const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'What is the managers name?'
    },
    {
        type: 'input',
        name: 'managerID',
        message: 'What is the manager ID?'
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'what is the manager\'s email?'
    },
    {
        type: 'input',
        name: "managerOfficeNumber",
        message: "What is the manager's office number?"
    }
];
const generalQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the team member's name?"
    },
    {
        type: "input",
        name: "idnumber",
        message: "What is the team member's ID?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the team member's email?"
    }
];

const internQuestions = [
    ...generalQuestions,
    {
        type: "input",
        name: "school",
        message: "What is the intern's school?"
    }
]
const engineerQuestions = [
    ...generalQuestions,
    {
        type: "input",
        name: "github",
        message: "what is the github username?"
    }
];

function askInternQuestions() {
    inquirer.prompt(internQuestions)
        .then((response) => {
            let intern = new Intern(response.name, response.idnumber, response.email, response.school)
            teamMembers.push(intern)
            displayMenu()
        })
};

function askEngineerQuestions() {
    inquirer.prompt(engineerQuestions)
        .then((response) => {
            let engineer = new Engineer(response.name, response.idnumber, response.email, response.github)
            teamMembers.push(engineer)
            displayMenu()
        })
}

function displayMenu() {
    inquirer.prompt(menuQuestions)
        .then((response) => {
            if (response.choice === 'intern') {
                askInternQuestions();
            }
            else if (response.choice === 'engineer') {
                askEngineerQuestions();
            }
            else {
                console.log(teamMembers," adding data");
                fs.writeFile("./dist/index.html", `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css">
        <title>Team Profile</title>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <main class="cardDiv">`, function (err) {
            if (err) throw err;
            console.log('Saved!');
          });
    addManagers(teamMembers);
    setTimeout(() => {addEngineers(teamMembers)},1000);
    setTimeout(() => {addInterns(teamMembers)},2000);
    setTimeout(() => {addEnd()},3000);
                
            }
        })
};

function addManagers(teamMembers){
    teamMembers.forEach((element) => {
        if (element.getRole() == "Manager"){
            console.log("append manager");
            fs.appendFile("./dist/index.html", 
            `
            <div class="card">
            <div class="cardHead">
                <h2>${element.getName()}</h2>
                <h3>${element.getRole()}</h3>
            </div>
            <div class="cardBody">
                <p>ID: ${element.getID()}</p>
                <p>Email: ${element.getEmail()}</p>
                <p>Office Number: ${element.getOfficeNumber()}</p>
            </div>
            </div>`,
            function (err) {
                if (err) throw err;
                console.log('Saved!');
              })
        }     
       
    })
};
function addEngineers(teamMembers){
    teamMembers.forEach((element) => {
        if (element.getRole() == "Engineer"){
            console.log("append engineer");
            fs.appendFile("./dist/index.html", 
            `<div class="card">
            <div class="cardHead">
            <h2>${element.getName()}</h2>
            <h3>${element.getRole()}</h3>
            </div>
            <div class="cardBody">
                <p>ID: ${element.getID()}</p>
                <p>Email: ${element.getEmail()}</p>
                <p>Github Name:${element.getGithub()}</p>
            </div>
            </div>`,
            function (err) {
                if (err) throw err;
                console.log('Saved!');
              })
        }     
       
    })
};
function addInterns(teamMembers){
    teamMembers.forEach((element) => {
        if (element.getRole() == "Intern"){
            console.log("append intern");
            fs.appendFile("./dist/index.html", 
            `<div class="card">
            <div class="cardHead">
            <h2>${element.getName()}</h2>
            <h3>${element.getRole()}</h3>
            </div>
            <div class="cardBody">
                <p>ID: ${element.getID()}</p>
                <p>Email: ${element.getEmail()}</p>
                <p>School: ${element.getSchool()}</p>
            </div>
            </div>`,
            function (err) {
                if (err) throw err;
                console.log('Saved!');
              })
        }     
       
    })
};
function addEnd(){
    fs.appendFile("./dist/index.html", 
    `</main>
    </body>
    </html>`,
    function (err) {
        if (err) throw err;
        console.log('html Complete!');
      })
}


function init() {
    inquirer.prompt(managerQuestions)
        .then((response) => {
            let manager = new Manager(response.managerName, response.managerID, response.managerEmail, response.managerOfficeNumber)
            teamMembers.push(manager);
            displayMenu();
        })
};

init();