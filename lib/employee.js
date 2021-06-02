const inquirer = require("inquirer");

class Employee {

    constructor() {
        return (async()=> {
            this.name = await this.getName();
            this.id = await this.getId();
            this.email = await this.getEmail();
            this.role = await this.getRole();
            return this;
        })();
    }

    // getName() {
    //     return inquirer.prompt([
    //         {
    //             type: 'input',
    //             name: 'name',
    //             message: "What's the employee's name?",
    //             validate (input) {
    //                 if(input==="") {
    //                     return 'Please enter a name';
    //                 } else {
    //                     return true;
    //                 }
    //             },
                
    //         },
    //         ]).then((answer)=> {   
    //             return answer.name;
    //         })
    // };

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
                validate (input) {
                    if (isNaN(input)) {
                        return 'Please enter a valid number'
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
                validate (input) {
                    if(!input.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
                        return 'Please enter a valid email';
                    } else {
                        return true;
                    }
                }
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