const Manager = require('../lib/manager');
const Employee = require('../lib/employee');

const inquirer = require('inquirer');

//mock inquirer to test Employee class and Manager subclass
jest.mock('inquirer')

//testing Manager subclass initialization which uses inquirer prompts
describe('Initilization', () => {
    it("user input from Employee class", async () => {
        //mocking answers to inquirer prompts
        inquirer.prompt = jest.fn().mockResolvedValue({name: 'Angela', id: '4', email: "angela@test.com", role: "Manager"})

        //making new Manager subclass of angela
        const angela = new Manager;

        //expect the angela object to equal the inquirer prompts
        await expect(angela).resolves.toEqual({name: 'Angela', id: '4', email: "angela@test.com", role: "Manager"})

    });
    it("user input from Manager sub-class", async () => {
        //mocking answers to inquirer prompts
        inquirer.prompt = jest.fn().mockResolvedValue({name: 'Angela', id: '4', email: "angela@test.com", role: "Manager", officeNumber: "1"})

        //making new Manager subclass of angela
        const angela = await new Manager;
        await angela.getOfficeNumber();

        //expect the angela object to equal the inquirer prompts after calling the getOfficeNumber function
        await expect(angela).toEqual({name: 'Angela', id: '4', email: "angela@test.com", role: "Manager", officeNumber: "1"})

    });


});


