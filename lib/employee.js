const inquirer = require("inquirer");

class Employee {

    constructor() {
        // this.name = name;
        // this.id = id;
        // this.email = email;
        // this.role = role;
        return (async()=> {
            this.name = await this.getName();
            this.id = await this.getId();
            this.email = await this.getEmail();
            this.role = await this.getRole();
            return this;
        })();
    }

    

    getName() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What's the employee's name?",
                validate (input) {
                    if(input==="") {
                        return 'Please enter a name';
                    } else {
                        return true;
                    }
                },
                
            },
            ]).then((answer)=> {   
                return answer.name;
            })
    };

    getId() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'id',
                message: "What's the employee's id?",
                validate (input) {
                    if(input==="") {
                        return 'Please enter an id';
                    } else {
                        return true;
                    }
                },
            },
        ]).then((answer)=> {
            return answer.id;
        })
    };

    getEmail() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'email',
                message: "What's the employee's email?",
                validate (input) {
                    if(input==="") {
                        return 'Please enter an email address';
                    } else {
                        return true;
                    }
                },
            }
        ]).then((answer)=> {
            return answer.email;
        })    
    };

    getRole() {
        return "employee";
    };
            
}           


// async function createEmployee() {
// const newEmployee = await new Employee();
// await console.log(newEmployee)
// }

// createEmployee();


module.exports = Employee;