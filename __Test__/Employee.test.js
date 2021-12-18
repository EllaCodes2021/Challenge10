const Employee = require('../lib/Employee');

test('can set name via contructor arugment', () =>{
    const employeeName = ('john');
    const employee = new Employee(employeeName);
    expect(employee.name).toBe(employeeName);
    
})
test('can set email via contructor arugment', () =>{
    const employeeEmail = ('john@john.com');
    const employeeName = ('john');
    const employee = new Employee(employeeName,employeeEmail);
    expect(employee.email).toBe(employeeEmail);
    
})
test('can set ID via contructor arugment', () =>{
    const employeeEmail = ('john@john.com');
    const employeeName = ('john');
    const employeeID = ('JJ1234')
    const employee = new Employee(employeeName,employeeEmail,employeeID);
    expect(employee.ID).toBe(employeeID);
    
})



// manager’s name, employeeID, email , office number
// engineer’s name, employeeID, email,  GitHub username
// intern’s name, employeeID, email, school