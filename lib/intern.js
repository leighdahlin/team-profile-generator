const inquirer = require('inquirer');
const Employee = require('./employee');

class Intern extends Employee {
    constructor() {
        //runs each inquirer prompt defined in the Employee class build the contructor object for the Intern subclass
        return (async()=> {
            await super(); 
            this.name = await super.name;
            this.id = await super.id;
            this.email = await super.email;

            return this;

        })();
    }
    //inquirer prompt to ask for the intern's name (specifically)
    getName() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What's the intern's name?",
                validate (input) {
                    if(input==="") {
                        return 'Please enter the intern\'s name';
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
    //inquirer prompt to ask for the intern's school
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
                validate (input) {
                    if (!isNaN(input)) {
                        return 'Please enter a valid name'
                    } else {
                        return true;
                    }
                },
                
            },
            
            ]).then((answer)=> {
                return this.school = answer.school;
            })    
    };
    getRole() {
        return "Intern";
    };

}

// async function createIntern() {
//     const newIntern = await new Intern();
//     await newIntern.getSchool();
//     await console.log(newIntern);
// }
    

module.exports = Intern;