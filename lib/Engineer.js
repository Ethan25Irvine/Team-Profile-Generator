const Employee = require("./Employee");
class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }

    getRole(employeeRole){
        employeeRole = "Engineer"
        return employeeRole;
    }

    getGithub(){
        return this.github;
    }
}

module.exports = Engineer;