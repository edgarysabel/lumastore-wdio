const { expect } = require("chai");
const productPage = require("../pageObjects/productPage");
const { addItemToCart } = require("../../utils/commonActions");
const homePage = require("../pageObjects/homePage");
const menSection = require("../pageObjects/menSectionPage");
const searchResult = require("../pageObjects/searchResultsPage");

describe("Add an item to shopping cart Test", () => {
  it("Add item to cart", async () => {
    await browser.url("");
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
  });
});
