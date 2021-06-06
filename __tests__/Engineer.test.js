const Engineer = require('../lib/engineer');
const Employee = require('../lib/employee');

const inquirer = require('inquirer');

jest.mock('inquirer')


describe('Initilization', () => {
    it("user input from Employee class", async () => {
        inquirer.prompt = jest.fn().mockResolvedValue({name: 'Jeff', id: '2', email: "jeff@jeff.com", role: "Engineer"})
        const jeff = new Engineer;

        await expect(jeff).resolves.toEqual({name: 'Jeff', id: '2', email: "jeff@jeff.com", role: "Engineer"})

    });
    it("user input from Engineer sub-class", async () => {
        inquirer.prompt = jest.fn().mockResolvedValue({email: "jeff@jeff.com", gitHub: "jeffjeff", id: "2", name: "Jeff", role: "Engineer"})
        const jeff = await new Engineer;
        await jeff.getGithub();
        await expect(jeff).toEqual({email: "jeff@jeff.com", gitHub: "jeffjeff", id: "2", name: "Jeff", role: "Engineer"})

    });

});