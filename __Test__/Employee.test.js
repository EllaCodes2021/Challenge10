const Employee = require('../lib/Employee');

test('can set name via contructor arugment', () =>{
    const employeeName = ('john');
    const employee = new Employee(employeeName);
    expect(employeeName.name).toBe(employeeName);
    
})



// manager’s name, employeeID, email , office number
// engineer’s name, employeeID, email,  GitHub username
// intern’s name, employeeID, email, school