const Employee = require('./employee');


class Manager extends Employee {
    constructor(name,id,email,officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getRole() {
        console.log("Manager")
        return "Manager";
        
    }

}

const Jim = new Manager("Jim","00001","jim@gmail.com","1");

console.log(Jim)

Jim.getRole();