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
            }
            ]).then((answer)=> {
                return this.officeNumber = answer.officeNumber;
            })    
    };
    

    getRole() {
        console.log("Manager")
        return "Manager";
        
    }

}

async function createEmployee() {
    const newEmployee = await new Manager();
    await newEmployee.getOfficeNumber();
    await console.log(newEmployee);
}
    
createEmployee();

module.exports = Manager;