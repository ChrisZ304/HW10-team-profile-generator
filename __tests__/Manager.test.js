const Manager = require("../lib/Manager");

test("set office number using constructor function", () => {
    const officeNumber = "1111";
    const employee = new Manager("Chris", 1, "c.zacharias304@gmail.com", officeNumber);
    expect(employee.officeNumber).toBe(officeNumber);
  });

  test("function getRole() should return Manager as a role", () => {
    const role = "Manager";
    const employee = new Manager("Chris", 1, "c.zacharias2021@gmail.com", "chrisz304");
    expect(employee.getRole()).toBe(role);
  });