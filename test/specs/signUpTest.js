const { expect } = require("chai");
const faker = require("faker");
const generatePassword = require("../../utils/passwordGenerator");
const signUpObjects = require("../pageObjects/signUpObjects");

describe("Sign-up Test", () => {
  it("Should register a new user", async () => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    const password = generatePassword();

    await signUpObjects.open();
    await signUpObjects.signUp(firstName, lastName, email, password, password);
    expect(await signUpObjects.firstNameInput.getValue()).to.equal(firstName);
    expect(await signUpObjects.lastNameInput.getValue()).to.equal(lastName);
    expect(await signUpObjects.emailInput.getValue()).to.equal(email);
    expect(await signUpObjects.passwordInput.getValue()).to.equal(password);
    expect(await signUpObjects.passwordConfirmationInput.getValue()).to.equal(
      password
    );
    await signUpObjects.signUpButton.click();

    expect(signUpObjects.welcomeMessage).to.exist;
    expect(await signUpObjects.welcomeMessage.getText()).to.contain(
      "Thank you for registering with Main Website Store."
    );
  });
});
