const { expect } = require("chai");
const signUpTestData = require("../data/testData");
const signUpObjects = require("../pageObjects/signUpObjects");

describe("Sign-up Test", () => {
  beforeEach(async () => {
    await signUpObjects.open();
  });

  afterEach(async () => {
    await browser.reloadSession();
  });
  it("Should register a new user", async () => {
    const { firstName, lastName, email, password } = signUpTestData;

    await signUpObjects.signUp(firstName, lastName, email, password);
    expect(await signUpObjects.firstNameInput.getValue()).to.equal(firstName);
    expect(await signUpObjects.lastNameInput.getValue()).to.equal(lastName);
    expect(await signUpObjects.emailInput.getValue()).to.equal(email);
    expect(await signUpObjects.passwordInput.getValue()).to.equal(password);
    expect(await signUpObjects.passwordConfirmationInput.getValue()).to.equal(
      password
    );
    await signUpObjects.signUpButton.click();

    expect(await signUpObjects.welcomeMessage).to.exist;
    expect(await signUpObjects.welcomeMessage.getText()).to.contain(
      "Thank you for registering with Main Website Store."
    );
  });

  it("Should not allow submission with empty fields", async () => {
    await signUpObjects.signUpButton.click();

    expect(await signUpObjects.firstNameFieldError).to.exist;
    expect(await signUpObjects.lastNameFieldError).to.exist;
    expect(await signUpObjects.emailFieldError).to.exist;
    expect(await signUpObjects.passwordFieldError).to.exist;
    expect(await signUpObjects.passwordConfirmationFieldError).to.exist;
  });
  /*
  it("Should not allow submission with non-matching passwords", async () => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    const password = generatePassword();
    const confirmPassword = password + "1";

    await signUpObjects.open();
    await signUpObjects.signUp(
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    );
    await signUpObjects.signUpButton.click();

    expect(await signUpObjects.nonMatchingPasswordsError).to.exist;
  });*/
});
