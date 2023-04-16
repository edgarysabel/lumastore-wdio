const signUpTestData = require("../data/testData");
const signUpObjects = require("../pageObjects/signUpObjects");
const {
  verifySignUpFormValues,
  verifyWelcomeMessage,
} = require("../../helpers/signUpHelpers");

describe("Sign-up Test", () => {
  it("Should register a new user", async () => {
    await signUpObjects.open();

    const { firstName, lastName, email, password } = signUpTestData;
    await signUpObjects.signUp(firstName, lastName, email, password);

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
