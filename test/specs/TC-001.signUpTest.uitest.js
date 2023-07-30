const { expect } = require("chai");
const dashboardPage = require("../pageObjects/dashboardPage");
const homePage = require("../pageObjects/homePage");
const { signUp } = require("../../utils/commonActions");
const DataGenerator = require("../../utils/dataGenerator");
const allureReporter = require("@wdio/allure-reporter").default;

const dataGenerator = new DataGenerator();
const { firstName, lastName, email, password } = dataGenerator;

describe("Sign-up Test", () => {
  it("Register a new user", async () => {
    await browser.url("");
    await browser.maximizeWindow();
    await homePage.createAccountLink.click();

    await signUp(firstName, lastName, email, password);

    await dashboardPage.welcomeMessage.waitForExist();

    // expect(await dashboardPage.userInfo.getText()).to.contain(firstName);
    // expect(await dashboardPage.userInfo.getText()).to.contain(lastName);
    // expect(await dashboardPage.userInfo.getText()).to.contain(email);
  });
});
