class Employee {
    constructor(name,email,ID){
        this.name = name;
        this.email = email;
        this.ID = ID;
    }
    getRoll(){
        return 'Employee';
    }

}

module.exports = Employee;
