const { expect } = require("chai");
const productPage = require("../pageObjects/productPage");
const { addItemToCart, goToUrl } = require("../../utils/commonActions");
const homePage = require("../pageObjects/homePage");
const menSection = require("../pageObjects/menSectionPage");
const searchResult = require("../pageObjects/searchResultsPage");
const testItem = require("../../utils/data/testItem");

describe("Add an item to shopping cart Test", () => {
  it("Add item to cart", async () => {
    await goToUrl();
    await homePage.menShoppingMenuItem.click();
    await menSection.bottomsCategory.click();
    await searchResult.itemResult.click();
    expect(await productPage.selectedItemName.getText()).to.contain(
      testItem.item
    );
    await addItemToCart();
    expect(await productPage.productAddedConfirmation.getText()).to.contain(
      `You added ${testItem.item} to your shopping cart.`
    );
  });
});
