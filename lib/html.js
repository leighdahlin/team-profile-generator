const baseHtml = (managerHtml,engineerHtml,internHtml) => { 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
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
};

const managerHtml = (teamProfile) => { 
for(i = 0; i < teamProfile.length; i++) {
    const cardHtml = 
    baseHtml()
}
`<div class="col-sm-4">
    <div class="card">
        <div class="card-header">
            <h3>${teamProfile[i].name}</h3>
            <div class="icon"><img src="../Images/avatar.png"><h4>${teamProfile[i].role}</h4></div>
        </div>
        <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: 001</li>
            <li class="list-group-item">Email: bob@manager.com</li>
            <li class="list-group-item">Office Number: 001</li>
        </ul>
        </div>
  </div>
</div>`
}