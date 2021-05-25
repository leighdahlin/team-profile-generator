const inquirer = require("inquirer");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    let questions =  inquirer.prompt([
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

    ])

    
    
}

// function employeeQuestions() {
//         return  inquirer.prompt([
//             {
//                 type: 'input',
//                 name: 'name',
//                 message: "What's the employee's name?",
//                 validate (input) {
//                     if(input==="") {
//                         return 'Please enter a name';
//                     } else {
//                         return true;
//                     }
//                 },
//             },
//             {
//                 type: 'input',
//                 name: 'id',
//                 message: "What's the employee's id?",
//                 validate (input) {
//                     if(input==="") {
//                         return 'Please enter an id';
//                     } else {
//                         return true;
//                     }
//                 },
//             },
//             {
//                 type: 'input',
//                 name: 'email',
//                 message: "What's the employee's email?",
//                 validate (input) {
//                     if(input==="") {
//                         return 'Please enter an email address';
//                     } else {
//                         return true;
//                     }
//                 },
//             }

//         ])
//         .then((data) => {
//             class Employee {
//                 constructor() {
//                     this.name = data.name;
//                     this.id = data.id;
//                     this.email = data.email;
//                     this.role = "employee";
//                 }
//             }
//         });
//     };
// function getId() {
//         return inquirer.prompt(
            
//         ) 
//     };

// function getEmail() {
//         return  inquirer.prompt(
            
//         )    
//     };

// function getRole() {
//         return "employee";
//     };

// class Employee {
//     constructor() {
//         this.name = getName();
//         this.id = getId();
//         this.email = getEmail();
//         this.role = getRole();
        // if (typeof name !== 'string' || !name.trim().length) {
        //     throw new Error("Expected parameter name to be non-empty string")
        // }
        // this.name = name;

        // // if (typeof id !== 123 || !id.length) {
        // //     throw new Error("Expected parameter id to be non-empty number")
        // // }
        // // this.id = id;

        // if (typeof email !== 'string' || !email.trim().length) {
        //     throw new Error("Expected parameter email to be non-empty string")
        // }
        // this.email = email;
    // }
    

    

    


// }

const newEmployee = new Employee()

module.exports = Employee;