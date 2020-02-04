const Employee = require("./Employee");
class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole(employeeRole){
        employeeRole = "Manager"
        return employeeRole;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;