const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { Color } = require("chalk");
const manager = [];
const engineers = [];
const interns = []

const generatorQs = ()=> {
//inquirer prompt to determine if the user wants to add a teammate or finish buidling the team
    return inquirer.prompt([
        {
            type: 'list',
            name: 'create',
            message: 'Please select an option below',
            choices: [
                'Add an engineer',
                'Add an intern',
                'Finish building team',
            ]
        },
    ])
    .then((answer) => {
        //if the user wants to add an engineer, it runs the funtion to create an engineer profile
        if(answer.create === "Add an engineer") {
            createEngineer();
        //if the user wants to add an intern, it runs the funtion to create an intern profile
        } else if (answer.create === "Add an intern") {
            createIntern();
        } else {
            //names the file a combiation of the office number and manager's name
            const fileName = manager[0].officeNumber + "-" + manager[0].name + ".html";

            //creates a html file using the file name genrates and runs the baseHtml function to put the html together
            //the mangagerHtml, generateEngHtml and generateIntern Html functions are triggered within the baseHtml function to get the html for each profile
            fs.writeFile(fileName,baseHtml(managerHtml(manager),generateEngHtml(engineers),generateInternHtml(interns)), (err) =>
            err ? console.log(manager) : console.log('Success!'));
        }

    })
}

//function to use the Manager subclass to create an object for the manager and push it into the manager array
async function createManager() {
    const newManager = await new Manager();
    await newManager.getOfficeNumber();
    await manager.push(newManager);
    await generatorQs();
}

//function to use the Engineer subclass to create an object for the manager and push it into the engineers array
async function createEngineer() {
    const newEngineer = await new Engineer();
    await newEngineer.getGithub();
    // await console.log(newEngineer);
    await engineers.push(newEngineer);
    // await console.log(engineers)
    await generatorQs();
}

//function to use the Intern subclass to create an object for the manager and push it into the interns array
async function createIntern() {
    const newIntern = await new Intern();
    await newIntern.getSchool();
    // await console.log(newIntern);
    await interns.push(newIntern);
    // await console.log(teamMembers)
    await generatorQs();
}

//html outline for html file, inserts the manager, engineer and intern profiles in order
baseHtml = (managerHtml,engineerHtml,internHtml) => 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
        <link rel="stylesheet" href="../dist/style.css">
        <title>Team Profile</title>
    </head>
    <body>
        <header>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4">My Team</h1>
            </div>
          </div>
        </header>
        <main>
            <div class="row team">
                ${managerHtml}
                ${engineerHtml}
                ${internHtml}
            </div>
        </main>
    </body>
    </html>`

//html for the manager profile, uses the manager array to populate the html
managerHtml = (managerInfo) => 
    `<div class="col-sm-4">
        <div class="card">
            <div class="card-header">
                <h3>${managerInfo[0].name}</h3>
                <div class="icon"><img src="../Images/branch-icon.png"><h4>Manager</h4></div>
            </div>
            <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${managerInfo[0].id}</li>
                <li class="list-group-item"><a href="mailto:${managerInfo[0].email}">${managerInfo[0].email}</a></li>
                <li class="list-group-item">Office Number: ${managerInfo[0].officeNumber}</li>
            </ul>
            </div>
      </div>
    </div>`

//html for the engineer profile, this function is triggered within the generateEngHtml function
engineerHtml = (engInfo) =>
`<div class="col-sm-4">
    <div class="card">
        <div class="card-header">
            <h3>${engInfo.name}</h3>
            <div class="icon"><img src="../Images/glasses-icon.png"><h4>Engineer</h4></div>
        </div>
        <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engInfo.id}</li>
            <li class="list-group-item"><a href="mailto:${engInfo.email}">${engInfo.email}</a></li>
            <li class="list-group-item">Github: <a href="https://github.com/${engInfo.gitHub}">${engInfo.gitHub}</a></li>
        </ul>
        </div>
    </div>
</div>`

//html for the intern profile, this function is triggered within the generateIntHtml function
internHtml = (intInfo) =>
`<div class="col-sm-4">
    <div class="card">
        <div class="card-header">
            <h3>${intInfo.name}</h3>
            <div class="icon"><img src="../Images/avatar.png"><h4>Intern</h4></div>
        </div>
        <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intInfo.id}</li>
            <li class="list-group-item"><a href="mailto:${intInfo.email}">${intInfo.email}</a></li>
            <li class="list-group-item">School: ${intInfo.school}</li>
        </ul>
        </div>
    </div>
</div>`

//function to generate the engineer profile html by going through each item in the engineers array
function generateEngHtml (profiles) {
    //empty array to push each profile into
    const engHtml = [];
    console.log(profiles)
    for (i=0; i< profiles.length; i++) {
        engHtml.push(engineerHtml(profiles[i]));
        
    }
    //joins each item in the array
    return engHtml.join()
}

//function to generate the intern profile html by going through each item in the interns array
function generateInternHtml (profiles) {
    const intHtml = [];
    console.log(profiles)
    for (i=0; i< profiles.length; i++) {
        intHtml.push(internHtml(profiles[i]));
        
    }
    return intHtml.join("")
}

//starts the profile generator by first getting manager information and then running the choices of adding or finishing
createManager();