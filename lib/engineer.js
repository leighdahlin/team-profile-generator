const Employee = require('./employee');
const inquirer = require("inquirer");


class Engineer extends Employee {
    constructor() {
        //runs each inquirer prompt defined in the Employee class build the contructor object for the Engineer subclass
        return (async()=> {
            await super(); 
            this.name = await super.name; 
            this.id = await super.id;
            this.email = await super.email;

            return this;
        })(); 
    }
    //inquirer prompt to ask for the engineer's name (specifically)
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
    //inquirer prompt to ask for the engineer's GitHub username
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

// async function createEngineer() {
//     const newEngineer = await new Engineer();
//     await newEngineer.getGithub();
//     await console.log(newEngineer);
// }
    

module.exports = Engineer;
