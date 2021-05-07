const Intern = require("../lib/Intern");

test("set school using constructor function", () => {
    const school = "University";
    const employee = new Intern("Chris", 1, "c.zacharias2021@gmail.com", school);
    expect(employee.school).toBe(school);
  });

  test("function getRole() should return Intern as a role", () => {
    const role = "Intern";
    const employee = new Intern("Chris", 1, "c.zacharias2021@gmail.com", "chrisz304");
    expect(employee.getRole()).toBe(role);
  });