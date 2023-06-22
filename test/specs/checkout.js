const { addItemToCart } = require("../../utils/commonActions");
const { signUp, selectState } = require("../../utils/commonActions");
const homePage = require("../pageObjects/homePage");
const menSection = require("../../test/pageObjects/menSectionPage");
const searchResult = require("../../test/pageObjects/searchResultsPage");
const productPage = require("../pageObjects/productPage");
const dashboardPage = require("../pageObjects/dashboardPage");
const checkoutPage = require("../pageObjects/checkoutPage")
const DataGenerator = require("../../utils/dataGenerator");
const { expect } = require("chai");
const dataGenerator = new DataGenerator();
const { firstName, lastName, email, password, city, street, zipCode, phoneNumber} = dataGenerator;

describe("Checkout after adding item to cart", () => {


    beforeEach(async () => {
        browser.url("");
        await homePage.createAccountLink.click();
        await signUp(firstName, lastName, email, password);
        await dashboardPage.addressBook.click();
        await dashboardPage.telephone.setValue(phoneNumber);
        await dashboardPage.streetAddress.setValue(street);
        await dashboardPage.city.setValue(city);
        await dashboardPage.zipcodeBox.setValue(zipCode);
        await dashboardPage.country.click();
        await selectState();
        await dashboardPage.saveAddressButton.click();
    })

    it("checking out", async ()=>{
        await homePage.menShoppingMenuItem.click();
        await menSection.bottomsCategory.click();
        await searchResult.itemResult.click();
        expect(await productPage.verifyProductSolActiveShort.getText()).to.contain(
          "Sol Active Short"
        );
        await addItemToCart();
        expect(await productPage.productAddedConfirmation.getText()).to.contain(
          "You added Sol Active Short to your shopping cart."
        );
        await productPage.cartIcon.click();
        await productPage.checkoutButton.click();
        await checkoutPage.shippingMethods.click();
        await checkoutPage.nextButton.click();
        await checkoutPage.placeOrderButton.click();
        expect(await checkoutPage.checkoutConfirmation.getText()).to.contain("Thank you for your purchase!");

    });




})