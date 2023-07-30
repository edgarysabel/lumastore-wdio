const productPage = require("../test/pageObjects/productPage");
const signUpObjects = require("../test/pageObjects/signUpPage");
const DataGenerator = require("./dataGenerator");

const dataGenerator = new DataGenerator();
const { countryName, stateName } = dataGenerator;

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

module.exports = {
  addItemToCart,
  signUp,
  selectState,
};
