const homePage = require("../pageObjects/homePage");
const { login, goToUrl } = require("../../utils/commonActions");

describe("Login Test", () => {
  it("Login successful", async () => {
    await goToUrl();
    await homePage.signInLink.click();
    await login();
  });
});
//
