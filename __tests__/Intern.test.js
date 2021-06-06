const Intern = require('../lib/intern');
const Employee = require('../lib/employee');

const inquirer = require('inquirer');

jest.mock('inquirer')


describe('Initilization', () => {
    it("user input from Employee class", async () => {
        inquirer.prompt = jest.fn().mockResolvedValue({name: 'Lisa', id: '3', email: "lisa@lisa.com", role: "Intern"})
        const lisa = new Intern;

        await expect(lisa).resolves.toEqual({name: 'Lisa', id: '3', email: "lisa@lisa.com", role: "Intern"})

    });
    it("user input from Intern sub-class", async () => {
        inquirer.prompt = jest.fn().mockResolvedValue({email: "lisa@lisa.com", id: "3", name: "Lisa", role: "Intern", school: "Yale"})
        const lisa = await new Intern;
        await lisa.getSchool();
        await expect(lisa).toEqual({email: "lisa@lisa.com", id: "3", name: "Lisa", role: "Intern", school: "Yale"})

    });

});

