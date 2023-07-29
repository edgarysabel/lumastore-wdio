const {
  signUp,
  selectState,
  login,
  goToUrl,
} = require("../../utils/commonActions");
const dashboardPage = require("../pageObjects/dashboardPage");
const homePage = require("../pageObjects/homePage");
const { expect } = require("chai");
const DataGenerator = require("../../utils/dataGenerator");

const dataGenerator = new DataGenerator();
const {
  firstName,
  lastName,
  email,
  password,
  city,
  street,
  zipCode,
  phoneNumber,
} = dataGenerator;

describe("Add address to customer information test", () => {
  beforeEach(async () => {
    await goToUrl();
    await homePage.createAccountLink.click();
    await signUp(firstName, lastName, email, password);
  });

  it("Add address", async () => {
    await dashboardPage.addressBook.click();
    await dashboardPage.telephone.setValue(phoneNumber);
    await dashboardPage.streetAddress.setValue(street);
    await dashboardPage.city.setValue(city);
    await dashboardPage.zipcodeBox.setValue(zipCode);
    await dashboardPage.country.click();
    await selectState();
    await dashboardPage.saveAddressButton.click();
    expect(await dashboardPage.addressSavedMessage.getText()).to.contain(
      "You saved the address."
    );
  });
});
