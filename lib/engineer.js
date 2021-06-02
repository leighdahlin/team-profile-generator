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

    getName() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What's the engineer's name?",
                validate (input) {
                    if(input==="") {
                        return 'Please enter the engineer\'s name';
                    } else {
                        return true;
                    }
                },
                
            },
            ]).then((answer)=> {   
                return answer.name;
            })
    };

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
                validate (input) {
                    if (!isNaN(input)) {
                        return 'Please enter a valid name'
                    } else {
                        return true;
                    }
                },
            },
            ]).then((answer)=> {
                return this.gitHub = answer.gitHub;
            })    
    };
    
    getRole() {
        return "Engineer";
    };
}

async function createEngineer() {
    const newEngineer = await new Engineer();
    await newEngineer.getGithub();
    await console.log(newEngineer);
}
    

module.exports = Engineer;
