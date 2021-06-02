const inquirer = require('inquirer');
const Employee = require('./employee');

class Intern extends Employee {
    constructor() {
        return (async()=> {
            await super();
            this.name = await super.name;
            this.id = await super.id;
            this.email = await super.email;

            return this;

        })();
    }

    getSchool() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'school',
                message: "What's the intern's school?",
                validate (input) {
                    if(input==="") {
                        return 'Please enter a school.';
                    } else {
                        return true;
                    }
                },
            }
            ]).then((answer)=> {
                return this.school = answer.school;
            })    
    };
    
    getRole() {
        return "Intern";
    };

}

async function createEmployee() {
    const newEmployee = await new Intern();
    await newEmployee.getSchool();
    await console.log(newEmployee);
}
    
createEmployee();


module.exports = Intern;