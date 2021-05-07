const Employee = require("../lib/Employee");

test("set name using constructor function", () => {
    const name = "Chris Zacharias";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
  });

test("set user ID using constructor function", () => {
    const id = "1";
    const employee = new Employee("Chris Zacharias", id, "c.zacharias2021@gmail.com");
    expect(employee.id).toBe(id);
  });

test("function getEmail() should return the email input", () => {
    const email = "c.zacharias2021@gmail.com";
    const employee = new Employee("Chris Zacharias", 1, email);
    expect(employee.getEmail()).toBe(email);
  });

test("function getRole() should return 'Employee'", () => {
    const role = "Employee";
    const employee = new Employee("Chris Zacharias", 1, "c.zacharias2021@gmail.com");
    expect(employee.getRole()).toBe(role);
  });