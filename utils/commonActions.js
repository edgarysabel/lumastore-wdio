const productPage = require("../test/pageObjects/productPage");
const signUpObjects = require("../test/pageObjects/signUpPage");
const DataGenerator = require("./dataGenerator");

const dataGenerator = new DataGenerator();
const { countryName, stateName } = dataGenerator;

async function signUp(firstName, lastName, email, password) {
  await forceScrollIntoView(signUpObjects.firstNameInput);
  await signUpObjects.firstNameInput.setValue(firstName);
  await forceScrollIntoView(signUpObjects.lastNameInput);
  await signUpObjects.lastNameInput.setValue(lastName);
  await forceScrollIntoView(signUpObjects.emailInput);
  await signUpObjects.emailInput.setValue(email);
  await forceScrollIntoView(signUpObjects.passwordInput);
  await signUpObjects.passwordInput.setValue(password);
  await forceScrollIntoView(signUpObjects.passwordConfirmationInput);
  await signUpObjects.passwordConfirmationInput.setValue(password);
  await forceScrollIntoView(signUpObjects.signUpButton);
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

module.exports = {
  addItemToCart,
  signUp,
  selectState,
  forceScrollIntoView,
};
