const { getNodeSourceCodeLocation } = require('parse5/lib/tree-adapters/default');
const Employee = require('./employee');


class Engineer extends Employee {
    constructor(name,id,email,github) {
    super(name, id, email);
    this.github = github;
    }

    getGithub() {
        console.log(this.github);
        return this.github;
    }
    
    getRole() {
        console.log("Engineer");
        return "Engineer";
    }
}



const Linda = new Engineer("Linda","00002","linda@aol.com","lindabitches")

Linda.getGithub();
Linda.getName();

console.log(Linda)
