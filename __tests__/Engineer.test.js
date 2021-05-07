const Engineer = require("../lib/Engineer");

test("set GitHub username using constructor function", () => {
    const github = "chrisz304";
    const employee = new Engineer("Chris", 1, "c.zacharias2021@gmail.com", github);
    expect(employee.github).toBe(github);
  });

  test("function getRole() should return Engineer as a role", () => {
    const role = "Engineer";
    const employee = new Engineer("Chris", 1, "c.zacharias2021@gmail.com", "chrisz304");
    expect(employee.getRole()).toBe(role);
  });