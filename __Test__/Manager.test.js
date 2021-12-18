
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('can set Office# via contructor arugment', () =>{
    const officeNumber = ('132456789');
    const ee = new Manager('joe','joe@joe.com','jj4562342', officeNumber);
    expect(ee.officeNumber).toBe(officeNumber);
    
})



// test('can set name via contructor arugment', () =>{
//     const employeeName = ('john');
//     const employee = new Employee(employeeName);
//     expect(employee.name).toBe(employeeName);
    
// })
// test('can set email via contructor arugment', () =>{
//     const employeeEmail = ('john@john.com');
//     const employeeName = ('john');
//     const employee = new Employee(employeeName,employeeEmail);
//     expect(employee.email).toBe(employeeEmail);
    
// })
// test('can set ID via contructor arugment', () =>{
//     const employeeEmail = ('john@john.com');
//     const employeeName = ('john');
//     const employeeID = ('JJ1234')
//     const employee = new Employee(employeeName,employeeEmail,employeeID);
//     expect(employee.ID).toBe(employeeID);
    
// })