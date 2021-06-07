const Intern = require('../lib/intern');
const Employee = require('../lib/employee');

const inquirer = require('inquirer');

//mock inquirer to test Employee class and Intern subclass
jest.mock('inquirer')

//testing Intern subclass initialization which uses inquirer prompts
describe('Initilization', () => {
    it("user input from Employee class", async () => {
        //mocking answers to inquirer prompts
        inquirer.prompt = jest.fn().mockResolvedValue({name: 'Lisa', id: '3', email: "lisa@lisa.com", role: "Intern"})

        //making new Intern subclass of lisa
        const lisa = new Intern;

        //expect the lisa object to equal the inquirer prompts
        await expect(lisa).resolves.toEqual({name: 'Lisa', id: '3', email: "lisa@lisa.com", role: "Intern"})

    });
    it("user input from Intern sub-class", async () => {
        //mocking answers to inquirer prompts
        inquirer.prompt = jest.fn().mockResolvedValue({email: "lisa@lisa.com", id: "3", name: "Lisa", role: "Intern", school: "Yale"})

        //making new Intern subclass of lisa
        const lisa = await new Intern;
        await lisa.getSchool(); //call the getSchool function to request school name and add to lisa object

        //expect the lisa object to equal the inquirer prompts after calling the getSchool function
        await expect(lisa).toEqual({email: "lisa@lisa.com", id: "3", name: "Lisa", role: "Intern", school: "Yale"})

    });

});

