const Manager = require('../lib/manager');
const Employee = require('../lib/employee');

const inquirer = require('inquirer');

jest.mock('inquirer')


describe('Initilization', () => {
    it("user input from Employee class", async () => {
        inquirer.prompt = jest.fn().mockResolvedValue({name: 'Angela', id: '4', email: "angela@test.com", role: "Manager"})
        const angela = new Manager;

        await expect(angela).resolves.toEqual({name: 'Angela', id: '4', email: "angela@test.com", role: "Manager"})

    });
    it("user input from Manager sub-class", async () => {
        inquirer.prompt = jest.fn().mockResolvedValue({name: 'Angela', id: '4', email: "angela@test.com", role: "Manager", officeNumber: "1"})
        const angela = await new Manager;
        await angela.getOfficeNumber();
        await expect(angela).toEqual({name: 'Angela', id: '4', email: "angela@test.com", role: "Manager", officeNumber: "1"})

    });


});


