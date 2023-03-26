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
    await signUpObjects.signUpButton.click();

    expect(signUpObjects.welcomeMessage).to.include(
      "Thank you for registering with Main Website Store."
    );
  });
});
