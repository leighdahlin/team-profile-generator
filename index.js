const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern")
const teamMembers = [];

const generatorQs = ()=> {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'create',
            message: 'Please select an option below',
            choices: [
                'Add an engineer',
                'Add an intern',
                'Finish',
            ]
        },
    ])
    .then((answer) => {
        if(answer.create === "Add an engineer") {
            createEngineer();
        } else if (answer.create === "Add an intern") {
            createIntern();
        } else {
            console.log(teamMembers)
            //name the file a combiation of the office number and manager's name
            const fileName = teamMembers[0].officeNumber + "-" + teamMembers[0].name
            console.log(fileName)
        }

    })
}

//function to use the Manager subclass to create an object for the manager and push it into the teamMember's array
async function createManager() {
    const newManager = await new Manager();
    await newManager.getOfficeNumber();
    // await console.log(newManager);
    await teamMembers.push(newManager);
    // await console.log(teamMembers)
    await generatorQs();
}

//function to use the Engineer subclass to create an object for the manager and push it into the teamMember's array
async function createEngineer() {
    const newEngineer = await new Engineer();
    await newEngineer.getGithub();
    // await console.log(newEngineer);
    await teamMembers.push(newEngineer);
    // await console.log(teamMembers)
    await generatorQs();
}

//function to use the Intern subclass to create an object for the manager and push it into the teamMember's array
async function createIntern() {
    const newIntern = await new Intern();
    await newIntern.getSchool();
    // await console.log(newIntern);
    await teamMembers.push(newIntern);
    // await console.log(teamMembers)
    await generatorQs();
}

//starts the profile generator by first getting manager information and then running the choices of adding or finishing
createManager();