const inquirer = require('inquirer');
const Employee = require('./employee');


class Manager extends Employee {
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
                message: "What's the team manager's name?",
                validate (input) {
                    if(input==="") {
                        return 'Please enter the team manager\'s name';
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
                return answer.name;
            })
    };

    getOfficeNumber() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'officeNumber',
                message: "What's the office number?",
                validate (input) {
                    if(input==="") {
                        return 'Please enter an office number';
                    } else {
                        return true;
                    }
                },
                validate (input) {
                    if (isNaN(input)) {
                        return 'Please enter a valid number'
                    } else {
                        return true;
                    }
                },
            }
            ]).then((answer)=> {
                return this.officeNumber = answer.officeNumber;
            })    
    };
    

    getRole() {
        return "Manager";
        
    }

}

async function createManager() {
    const newManager = await new Manager();
    await newManager.getOfficeNumber();
    await console.log(newManager);
}
    

module.exports = Manager;