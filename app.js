// needed for the application
const inquirer = require("inquirer");
const fs = require("fs");
const generateHtml = require("./main.js")
// Employee Roles 
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const employeeData = [];

    function employeeInfo(){
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "employeeName",
                    message:"What is this employees name?"
                },
                
                {
                    type: "input",
                    name: "employeeID",
                    message:"What is this employees ID?"
                },
                {
                    type: "input",
                    name: "employeeEmail",
                    message:"What is this employees email"
                },
                {
                    type: "list",
                    name: "employeeRole",
                    message:"What is this employees role?",
                    choices: [
                        "Manager",
                        "Engineer",
                        "Intern"
                    ]
                },
                {
                    type: "input",
                    name: "office",
                    message:"What is this managers office number?",
                    when: function(answers){
                        return answers.employeeRole === "Manager";
                    }
                },
                {
                    type: "input",
                    name: "github",
                    message:"What is this engineers github username?",
                    when: function(answers){
                        return answers.employeeRole === "Engineer";
                    }
                },
                {
                    type: "input",
                    name: "school",
                    message:"What school does this intern go to?",
                    when: function(answers){
                        return answers.employeeRole === "Intern";
                    }
                },
               
                
            ]).then((data)=>{
                switch (data.employeeRole){
                    case "Manager":
                        const newManager = new Manager(data.employeeName, data.employeeID, data.employeeEmail, data.office)

                        employeeData.push(newManager)
                        break;
                    case "Engineer":
                        const newEngineer = new Engineer(data.employeeName, data.employeeID, data.employeeEmail, data.github)
                        employeeData.push(newEngineer)
                        break;
                    case "Intern":
                        const newIntern = new Intern(data.employeeName, data.employeeID, data.employeeEmail, data.school)
                        employeeData.push(newIntern)
                        break;
                }
                
                inquirer
                .prompt([
                    {
                        type:"list",
                        name:"newEmployee",
                        choices:[
                            "yes",
                            "no"
                        ]
                    }
                ]).then((info)=>{
                    if (info.newEmployee === "yes"){
                        employeeInfo();
                    } else {
                        printData(info);
                    }  
                })
              });  // .then inquirer func tion asking if there is another employee, if yes call this function if no res.end();
              
        }
    
       function printData(){
            generateHtml(employeeData);
            }
       
    
        employeeInfo();