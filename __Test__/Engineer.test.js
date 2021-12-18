const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('can set github via contructor arugment', () =>{
    const github = ('lexiCodes2021');
    const eng = new Engineer('joe','joe@joe.com','jj4562342', github);
    expect(eng.github).toBe(github);
    
})