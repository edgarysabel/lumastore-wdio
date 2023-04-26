const { expect } = require("chai");
const dashboardObjects = require("../pageObjects/dashboardPageObjects");
const homeObjects = require("../pageObjects/homePageObjects");
const { signUp } = require("../../utils/signUpActions");
const DataGenerator = require("../../utils/dataGenerator");

const dataGenerator = new DataGenerator();
const { firstName, lastName, email, password } = dataGenerator;

describe("Sign-up Test", () => {
  it("Register a new user", async () => {
    await browser.url("");
    await homeObjects.createAccountLink.click();
    await signUp(firstName, lastName, email, password);
    expect(await dashboardObjects.welcomeMessage.getText()).to.contain(
      "Thank you for registering with Main Website Store."
    );
    expect(await dashboardObjects.userInfo.getText()).to.contain(firstName);
    expect(await dashboardObjects.userInfo.getText()).to.contain(lastName);
    expect(await dashboardObjects.userInfo.getText()).to.contain(email);
  });
});
