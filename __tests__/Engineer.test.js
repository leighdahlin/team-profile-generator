const Engineer = require('../lib/engineer');
const Employee = require('../lib/employee');

const inquirer = require('inquirer');

//mock inquirer to test Employee class and Engineer subclass
jest.mock('inquirer')

//testing Engineer subclass initialization which uses inquirer prompts
describe('Initilization', () => {
    it("user input from Employee class", async () => {
        //mocking answers to inquirer prompts
        inquirer.prompt = jest.fn().mockResolvedValue({name: 'Jeff', id: '2', email: "jeff@jeff.com", role: "Engineer"})

        //making new Engineer subclass of jeff
        const jeff = new Engineer;

        //expect the jeff object to equal the inquirer prompts
        await expect(jeff).resolves.toEqual({name: 'Jeff', id: '2', email: "jeff@jeff.com", role: "Engineer"})

    });
    it("user input from Engineer sub-class", async () => {
        //mocking answers to inquirer prompts
        inquirer.prompt = jest.fn().mockResolvedValue({email: "jeff@jeff.com", gitHub: "jeffjeff", id: "2", name: "Jeff", role: "Engineer"})

        //making new Engineer subclass of jeff
        const jeff = await new Engineer;
        await jeff.getGithub(); //call the getGithub function to request gitHub username and add to jeff object

        //expect the jeff object to equal the inquirer prompts after calling the getGithub function
        await expect(jeff).toEqual({email: "jeff@jeff.com", gitHub: "jeffjeff", id: "2", name: "Jeff", role: "Engineer"})
    });

});