const inquirer = require('inquirer');
const writeFile = require('./util/writefile.js');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const employeeDatabase = [];
const makeHTML = require('./util/template.js');


const promptUser = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "type",
            message: "What type of employee are you entering?.",
            choices: ["Employee", "Manager", " Intern", "Engineer"]
        },
        

    ])
    .then (userChoice => {
        console.log(userChoice);
        if (userChoice.type == "Manager"){
            let employee = new Manager();
            let manQuest = employee.createManager();
            employeeDatabase.push(manQuest);
            return manQuest;
            
        // }else if (choices === "Intern"){
        //     let employee = Intern.createIntern();
        //     EmployeeDatabase.push(employee);
        // }else if (choices === "Engineer"){
        //     let employee = Engineer.createEngineer();
        //     EmployeeDatabase.push(employee);
        // }else if (choices === "Employee"){
        //     let employee = Employee.createEmployee();
        //     EmployeeDatabase.push(employee);
        }else {
            return console.log('no option selecte please try again!');
        
        }

    })
};

promptUser()
    .then(manQuest=> {
        var geneHTML = makeHTML(manQuest);
        return writeFile(geneHTML);
    // return console.log(manQuest);
});
