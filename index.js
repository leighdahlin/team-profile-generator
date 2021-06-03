const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern")
const manager = [];
const engineers = [];
const interns = []

const generatorQs = ()=> {
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
        if(answer.create === "Add an engineer") {
            createEngineer();
        } else if (answer.create === "Add an intern") {
            createIntern();
        } else {
            // console.log(teamMembers)
            //name the file a combiation of the office number and manager's name
            const fileName = manager[0].officeNumber + "-" + manager[0].name + ".html";
            console.log(fileName)

            fs.writeFile(fileName,baseHtml(managerHtml(manager)), (err) =>
            err ? console.log(manager) : console.log('Success!'));
        }

    })
}

//function to use the Manager subclass to create an object for the manager and push it into the teamMember's array
async function createManager() {
    const newManager = await new Manager();
    await newManager.getOfficeNumber();
    // await managerHtml(newManager);
    // await console.log(newManager);
    await manager.push(newManager);
    await console.log(manager)
    // await console.log(teamMembers)
    await generatorQs();
}

//function to use the Engineer subclass to create an object for the manager and push it into the teamMember's array
async function createEngineer() {
    const newEngineer = await new Engineer();
    await newEngineer.getGithub();
    // await console.log(newEngineer);
    await engineers.push(newEngineer);
    // await console.log(teamMembers)
    await generatorQs();
}

//function to use the Intern subclass to create an object for the manager and push it into the teamMember's array
async function createIntern() {
    const newIntern = await new Intern();
    await newIntern.getSchool();
    // await console.log(newIntern);
    await interns.push(newIntern);
    // await console.log(teamMembers)
    await generatorQs();
}
//,engineerHtml,internHtml
// ${engineerHtml}
// ${internHtml}

baseHtml = (managerHtml) => 
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
            </div>
        </main>
    </body>
    </html>`


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


//starts the profile generator by first getting manager information and then running the choices of adding or finishing
createManager();