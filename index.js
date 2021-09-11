const inquirer = require('inquirer');
const fs = require('fs');
const { inherits } = require('util');

const questions = [
    {}
];


function init(){
    inquirer.prompt(questions)
    .then((response) => 
    fs.writeFile('./dist./index.html', 
    'written file',
    function (err) {
        if (err) throw err;
        console.log('Created!');
      }))
}
