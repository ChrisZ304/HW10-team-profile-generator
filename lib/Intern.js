const Employee = require('./Employee');
class Intern extends Employee {
    constructor(name, id, email, school) {
        // Gets methods from Employee class
        super(name, id, email);
        this.school = school;
    }    

    getSchool() {
        return this.school;

    };

    getRole() {
        return "Intern";
    }
};

module.exports = Intern;