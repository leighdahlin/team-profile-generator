class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        console.log(this.name);
        return this.name;
    }

    getId() {
        console.log(this.id);
        return this.id;
    }

    getEmail() {
        console.log(this.email);
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

const newEmployee = new Employee("Shannon","00000","shannon@yahoo.com")

newEmployee.getName();

newEmployee.getId();

newEmployee.getEmail();

newEmployee.getRole();

module.exports = Employee;