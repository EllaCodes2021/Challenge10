const Employee = require('../lib/Employee');
class Intern  extends Employee{
    constructor(name,email,ID,school){
        super (name, email, ID);
        this.school = school;
    }
    getRole(){
        return 'Intern';
    }
    getSchool(){
        return this.school;
    }
}

module.exports = Intern;