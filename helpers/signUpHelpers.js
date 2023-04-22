const { expect } = require("chai");

async function verifySignUpFormValues(
  signUpObjects,
  firstName,
  lastName,
  email,
  password
) {
  expect(await signUpObjects.firstNameInput.getValue()).to.equal(firstName);
  expect(await signUpObjects.lastNameInput.getValue()).to.equal(lastName);
  expect(await signUpObjects.emailInput.getValue()).to.equal(email);
  expect(await signUpObjects.passwordInput.getValue()).to.equal(password);
  expect(await signUpObjects.passwordConfirmationInput.getValue()).to.equal(
    password
  );
}

async function verifyWelcomeMessage(dashboardObjects) {
  const welcomeMessageText = await dashboardObjects.welcomeMessage.getText();
  expect(welcomeMessageText).to.contain(
    "Thank you for registering with Main Website Store."
  );
}

module.exports = {
  verifySignUpFormValues,
  verifyWelcomeMessage,
};
