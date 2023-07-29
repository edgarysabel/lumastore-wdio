const homePage = require("../pageObjects/homePage");
const { signUp, goToUrl } = require("../../utils/commonActions");
const DataGenerator = require("../../utils/dataGenerator");

const dataGenerator = new DataGenerator();
const { firstName, lastName, email, password } = dataGenerator;

describe("Sign-up Test", () => {
  it("Register a new user", async () => {
    await goToUrl();
    await homePage.createAccountLink.click();
    await signUp(firstName, lastName, email, password);
  });
});
