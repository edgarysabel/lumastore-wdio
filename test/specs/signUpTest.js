const signUpTestData = require("../data/testData");
const signUpObjects = require("../pageObjects/signUpPageObjects");
const {
  verifySignUpFormValues,
  verifyWelcomeMessage,
} = require("../../helpers/signUpHelpers");
const { signUp } = require("../actions/signUpActions");

const { firstName, lastName, email, password } = signUpTestData;

describe("Sign-up Test", () => {
  it("Should register a new user", async () => {
    await browser.url("/customer/account/create/");
    await signUp(firstName, lastName, email, password);
    await verifySignUpFormValues(
      signUpObjects,
      firstName,
      lastName,
      email,
      password
    );
    await signUpObjects.signUpButton.click();
    await verifyWelcomeMessage(signUpObjects);
  });
});
