const productPage = require("../test/pageObjects/productPage");
const signUpObjects = require("../test/pageObjects/signUpPage");
const DataGenerator = require("./dataGenerator");
const loginPage = require("../test/pageObjects/loginPage");
const loginData = require("./data/loginData");
const dataGenerator = new DataGenerator();
const { countryName, stateName } = dataGenerator;

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
  await signUpObjects.emailInput.setValue(email);
  await signUpObjects.passwordInput.setValue(password);
  await signUpObjects.passwordConfirmationInput.setValue(password);
  await signUpObjects.signUpButton.click();
}

const addItemToCart = async () => {
  await productPage.sizeOption32.click();
  await productPage.colorOption.click();
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

// Custom helper function to scroll an element into view before interaction
async function forceScrollIntoView(element) {
  await element.scrollIntoView({
    block: "center",
    inline: "center",
    offset: { x: 0, y: 100 },
  });
}

async function goToUrl() {
  await browser.url("");
  await browser.maximizeWindow();
}

module.exports = {
  addItemToCart,
  signUp,
  login,
  goToUrl,
  selectState,
  forceScrollIntoView,
};
