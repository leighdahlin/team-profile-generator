const inquirer = require("inquirer");

class Employee {

    constructor() {
        //runs each inquirer prompt defined in the functions below to build the contructor object for the Employee class
        return (async()=> {
            this.name = await this.getName(); //this triggers the getName() function within each subclass
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
                        return 'Please enter the employee\'s name';
                    } else {
                        return true;
                    }
                },
                
            },
            ]).then((answer)=> {   
                return answer.name;
            })
    };

    //inquirer prompt to get the id of the employee
    getId() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'id',
                message: "What's the employee's id?",
                //validates that the user didn't leave the question blank
                validate (input) {
                    if(input==="") {
                        return 'Please enter an id';
                    } else {
                        return true;
                    }
                },
                //validates that the user entered a number
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

    //inquirer prompt to get the email of the employee
    getEmail() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'email',
                message: "What's the employee's email?",

                //validates that the user didn't leave the question blank
                validate (input) {
                    if(input==="") {
                        return 'Please enter an email address';
                    } else {
                        return true;
                    }
                },

                //validates that the user entered the email in the appropriate format using RegEx
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


module.exports = Employee;