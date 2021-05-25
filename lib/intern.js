const Employee = require('./employee');


class Intern extends Employee {
    constructor(name,id,email,school){
    super(name, id, email);
    this.school = school;
    }

    getSchool() {
        console.log(this.school);
        return this.school;
    }

    getRole() {
        console.log("Intern");
        return "Intern";
    }

}

const Eric = new Intern("Eric",00003,"eric@yass.com","AF Academy");

console.log(Eric);

Eric.getId();
Eric.getSchool();

module.exports = Intern;