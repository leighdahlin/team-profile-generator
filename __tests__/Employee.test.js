
const inquirer = require('inquirer');
const Employee = require('../lib/employee');

jest.mock('inquirer')

describe('Initilization', () => {
    it("user input", async () => {
        // expect.assertions(1);
        inquirer.prompt = jest.fn().mockResolvedValue({name: 'Bob'})

        await expect(Employee).resolves.toEqual({name:'Bob'})

    });
    // it("Id", () => {
    //     const id = 1;

    //     const newEmployee = new Employee("John",id,"john@test.com");
    //     const result = newEmployee.id;

    //     expect(result).toEqual(result);
    // });
    // it("Email", () => {
    //     const email = "john@test.com";

    //     const newEmployee = new Employee("John",1,email);
    //     const result = newEmployee.email;

    //     expect(result).toEqual(result);
    // });
});

// describe("Data validity, are the values expected?", () => {
//     it("Should throw an error if name provided is not string value", ()=> {
//         const invalidName = 2;
//         const error = new Error ("Expected parameter name to be non-empty string");

//         const cb = () => new Employee(invalidName,"1","john@test.com")

//         expect(cb).toThrow(error)
//     });
    // it("Should throw an error if id provided is not a number", ()=> {
    //     const invalidId = "John";
    //     const error = new Error ("Expected parameter id to be non-empty number");

    //     const cb = () => new Employee("John", invalidId, "john@test.com")

    //     expect(cb).toThrow(error);
    // })
// }) 

//additional tests: test email validation
//test formulas