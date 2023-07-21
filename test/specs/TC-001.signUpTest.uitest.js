const { expect } = require("chai");
const dashboardPage = require("../pageObjects/dashboardPage");
const homePage = require("../pageObjects/homePage");
const { signUp } = require("../../utils/commonActions");
const DataGenerator = require("../../utils/dataGenerator");

const dataGenerator = new DataGenerator();
const { firstName, lastName, email, password } = dataGenerator;

describe("Sign-up Test", () => {
  it("Register a new user", async () => {
    await browser.url("");
    await browser.maximizeWindow();
    await homePage.createAccountLink.click();
    await signUp(firstName, lastName, email, password);
    // expect(await dashboardPage.welcomeMessage.getText()).to.contain(
    //   "Thank you for registering with Main Website Store."
    // );
    expect(await dashboardPage.userInfo.getText()).to.contain(firstName);
    expect(await dashboardPage.userInfo.getText()).to.contain(lastName);
    expect(await dashboardPage.userInfo.getText()).to.contain(email);
  });
});
