
const inquirer = require('inquirer');
const Employee = require('../lib/employee');

//mock inquirer to test class
jest.mock('inquirer')

//testing Employee class initialization which uses inquirer prompts
describe('Initilization', () => {
    it("user input", async () => {
        //mocking answers to inquirer prompts
        inquirer.prompt = jest.fn().mockResolvedValue({name: 'Bob', id: '1', email: "bob@bob.com", role: "employee"})

        //making new Employee class of bob
        const bob = new Employee;
        
        //expect the bob object to equal the inquirer prompts
        await expect(bob).resolves.toEqual({name: 'Bob', id: '1', email: "bob@bob.com", role: "employee"})


    });

});
    
