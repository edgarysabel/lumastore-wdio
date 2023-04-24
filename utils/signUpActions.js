const signUpPageObjects = require("../test/pageObjects/signUpPageObjects");

async function signUp(firstName, lastName, email, password) {
  await signUpPageObjects.firstNameInput.setValue(firstName);
  await signUpPageObjects.lastNameInput.setValue(lastName);
  await signUpPageObjects.signUpForNewsletterCheckbox.click();
  await signUpPageObjects.emailInput.setValue(email);
  await signUpPageObjects.passwordInput.setValue(password);
  await signUpPageObjects.passwordConfirmationInput.setValue(password);
  await signUpPageObjects.signUpButton.click();
}

module.exports = {
  signUp,
};
