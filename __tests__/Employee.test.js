
const inquirer = require('inquirer');
const Employee = require('../lib/employee');

jest.mock('inquirer')


describe('Initilization', () => {
    it("user input", async () => {
        inquirer.prompt = jest.fn().mockResolvedValue({name: 'Bob', id: '1', email: "bob@bob.com", role: "employee"})
        const bob = new Employee;

        await expect(bob).resolves.toEqual({name: 'Bob', id: '1', email: "bob@bob.com", role: "employee"})

    });

});

describe("Validation, are the values expected?", () => {
    it("Should throw an error if name provided is not string value", async ()=> {
        inquirer.prompt = jest.fn().mockResolvedValue({name: '1', id: 'Bob', email: "bob.com", role: "employee"})
        // const bob = await new Employee;

        const error = await new Error ("Please enter the engineer\'s name");

        const cb = () => new Employee

        await expect(cb).toThrow(error)
    });
    // it("Should throw an error if id provided is not a number", ()=> {
    //     const invalidId = "John";
    //     const error = new Error ("Expected parameter id to be non-empty number");

    //     const cb = () => new Employee("John", invalidId, "john@test.com")

    //     expect(cb).toThrow(error);
    // })
}) 

//additional tests: test email validation
//test formulas