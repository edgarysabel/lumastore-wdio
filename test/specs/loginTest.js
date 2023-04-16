const loginPage = require("../pageObjects/loginPageObjects");
const { email, password } = require("../../test/data/credentials");

describe("Login Test", () => {
  it("Should log in with valid credentials", async () => {
    await loginPage.open();
    await loginPage.login(email, password);
  });
});
