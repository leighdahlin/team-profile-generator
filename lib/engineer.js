const Employee = require('./employee');
const inquirer = require("inquirer");


class Engineer extends Employee {
    constructor() {
    
        return (async()=> {
            await super();
            this.name = await super.name;
            this.id = await super.id;
            this.email = await super.email;

            return this;
        })(); 
    }

    getGithub() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'gitHub',
                message: "What's the employee's GitHub username?",
                validate (input) {
                    if(input==="") {
                        return 'Please enter an GitHub username';
                    } else {
                        return true;
                    }
                },
            }
            ]).then((answer)=> {
                return this.gitHub = answer.gitHub;
            })    
    };
    
    getRole() {
        return "Engineer";
    };
}

async function createEmployee() {
    const newEmployee = await new Engineer();
    await newEmployee.getGithub();
    await console.log(newEmployee);
}
    
createEmployee();


module.exports = Engineer;
