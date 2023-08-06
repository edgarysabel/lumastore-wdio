const productPage = require("../test/pageObjects/productPage");
const signUpObjects = require("../test/pageObjects/signUpPage");
const DataGenerator = require("./dataGenerator");
const loginPage = require("../test/pageObjects/loginPage");
const loginData = require("./data/loginData");
const dashboardPage = require("../test/pageObjects/dashboardPage");
const { expect } = require("chai");

const dataGenerator = new DataGenerator();
const { countryName, stateName } = dataGenerator;

async function goToUrl() {
  await browser.url("");
  await browser.maximizeWindow();
}

async function login() {
  await loginPage.loginEmailInput.setValue(loginData.email);
  await loginPage.loginPasswordInput.setValue(loginData.password);
  await loginPage.loginBtn.click();
  await browser.pause(5000);
  /*
  await expect(dashboardPage.loginWelcomeMessage.getText()).to.contain(
    `Welcome, ${loginData.user_name} ${loginData.user_lastname}!`
  );*/
}

async function signUp(firstName, lastName, email, password) {
  await signUpObjects.firstNameInput.setValue(firstName);
  await signUpObjects.lastNameInput.setValue(lastName);
  await signUpObjects.signUpEmailInput.setValue(email);
  await signUpObjects.signUpPasswordInput.setValue(password);
  await signUpObjects.passwordConfirmationInput.setValue(password);
  await signUpObjects.signUpButton.click();
  await dashboardPage.welcomeMessage.waitForExist();
  expect(await dashboardPage.userInfo.getText()).to.contain(firstName);
  expect(await dashboardPage.userInfo.getText()).to.contain(lastName);
  expect(await dashboardPage.userInfo.getText()).to.contain(email);
}

const addItemToCart = async () => {
  await productPage.itemSize.click();
  await productPage.itemColor.click();
  await productPage.addToCartButton.click();
};

async function selectState() {
  let state = "";
  switch (countryName) {
    case "United States":
      state = $(
        "//select[@id='region_id']/option[contains(text(),'" + stateName + "')]"
      );
      await state.click();
      break;
    default:
      state = $("//input[@id='region']");
      await state.setValue(stateName);
      break;
  }
}

module.exports = {
  addItemToCart,
  signUp,
  selectState,
  login,
  goToUrl,
};
