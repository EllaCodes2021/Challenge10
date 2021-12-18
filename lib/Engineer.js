const Employee = require('../lib/Employee');
class Engineer  extends Employee{
    constructor(name,email,ID,github){
        super (name, email, ID);
        this.github = github;
    }
    getRole(){
        return 'Engineer';
    }
    getGithub(){
        return this.github;
    }
}



module.exports = Engineer;
