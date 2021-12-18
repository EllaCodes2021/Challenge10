const Employee = require('../lib/Employee');
const inquire = require('inquirer');
class Manager  extends Employee{
    constructor(name,email,ID,officeNumber){
        super (name, email, ID);
        this.officeNumber = officeNumber;
    }
    getRole(){
        return 'Manager';
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    createManager() {
        return inquire
        .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What is your name?"
                },
                {
                    type: "input",
                    name: "email",
                    message: "What is your email?"
                },
                {
                    type: "input",
                    name: "ID",
                    message: "What is your ID?"
                },
                {
                    type: "input",
                    name: "officeNumber",
                    message: "What is your phone number?"
                },
        ]);
    }
}

module.exports = Manager;

