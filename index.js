const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
var docMain = document.querySelector(".cardDiv");
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
            let intern = new Intern(response.name, response.idnumber, response.email, response.github)
            teamMembers.push(intern)
            displayMenu()
        })
};

function askEngineerQuestions() {
    inquirer.prompt(engineerQuestions)
        .then((response) => {
            let engineer = new Engineer(response.name, response.idnumber, response.email, response.school)
            teamMembers.push(engineer)
            console.log(teamMembers)
            displayMenu()
        })
}

function displayMenu() {
    inquirer.prompt(menuQuestions)
        .then((response) => {
            console.log(response)
            if (response.choice === 'intern') {
                askInternQuestions();
            }
            else if (response.choice === 'engineer') {
                askEngineerQuestions();
            }
            else {
                addData(teamMembers);
                
            }
        })
};

function addData(teamMembers) {
    teamMembers.forEach((element) => {
        if (element.getRole() == "manager"){
            let card = document.createElement("div");
            card.innerHTML =
            `<div class="cardHead">
                <h3>${element.getName()}</h3>
                <h4>${element.getRole()}</h4>
            </div>
            <div class="cardBody">
                <p>ID: ${element.getID()}</p>
                <p>Email: ${element.getEmail()}</p>
                <p>${element.getOfficeNumber()}</p>
            </div>`
        //append card
        //.appendChild(card);
        }        
    })
};
function init() {
    inquirer.prompt(managerQuestions)
        .then((response) => {
            let manager = new Manager(response.managerName, response.managerID, response.managerEmail, response.managerOfficeNumber)
            teamMembers.push(manager);
            displayMenu();
        })
};

init();