const productPage = require("../test/pageObjects/productPage");
const signUpObjects = require("../test/pageObjects/signUpPage");

async function signUp(firstName, lastName, email, password) {
  await signUpObjects.firstNameInput.setValue(firstName);
  await signUpObjects.lastNameInput.setValue(lastName);
  await signUpObjects.signUpForNewsletterCheckbox.click();
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

module.exports = {
  addItemToCart,
  signUp,
};
