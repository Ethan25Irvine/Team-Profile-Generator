const fs = require("fs");
   
   var header =  `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
            
        </head>
        <body>
        <div class= "jumbotron bg-info text-center text-light"><h1>Wow... what a team</h1></div>
        <div class= "container mt-5">
        <div class="row"> 
    `
    const footer = `
                   
                    </body> 
                    </html>
                    `
    
function generateHtml(array){
    console.log(array)

    // swith call the generate
for (let i =0; i< array.length; i++){
    const role = array[i].getRole()
    // console.log(role)
    switch(role){
        case "Manager":
                var card = generateManager(array[i])
                break;
            case "Engineer":
                var card = generateEngineer(array[i])
                break;
            case "Intern":
                var card = generateIntern(array[i])
                break;
        }
        // add the cards from the loop to the html
          header = header+card;
          console.log(header);
    }
  
    // add everything together (basically close the html page);
    header = header+footer;
    
    // write to the file
    fs.writeFile('./templates/main.html', header , function (err) {
        if (err) {
          console.log(err)
        } else {
          console.log('success')
        }
    });
}  
    

    
    

function generateEngineer(data){
return `<div class="card bg-primary col-lg-4">
<ul class="list-group list-group-flush">
  <li class="list-group-item bold"><h1>Engineer</h1></li>
  <li class="list-group-item">${data.name}</li>
  <li class="list-group-item">ID: ${data.id}</li>
  <li class="list-group-item">Email: ${data.email}</li>
  <li class="list-group-item">Github:<a class="nav-link" href="https://www.github.com/${data.github}" target="_blank"> ${data.github}</a> </li>
</ul>
</div>`
}

function generateManager(data){
    console.log(data);
    return `<div class="card bg-warning col-lg-4" >
    <ul class="list-group list-group-flush">
      <li class="list-group-item bold"><h1>Manager</h1></li>
      <li class="list-group-item">${data.name}</li>
      <li class="list-group-item">ID: ${data.id}</li>
      <li class="list-group-item">Email: ${data.email}</a></li>
      <li class="list-group-item">Office Number:${data.officeNumber}</li>
    </ul>
    </div>`
    
}

function generateIntern(data){
    return `<div class="card bg-dark col-lg-4" >
    <ul class="list-group list-group-flush">
      <li class="list-group-item bold"><h1>Intern</h1></li>
      <li class="list-group-item">${data.name}</li>
      <li class="list-group-item">ID:${data.id}</li>
      <li class="list-group-item">Email:${data.email}</a></li>
      <li class="list-group-item">School:${data.school}</li>
    </ul>
    </div>`
}

module.exports= generateHtml;