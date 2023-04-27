const { expect } = require("chai");
const productPage = require("../pageObjects/productPage");
const { selectItem, addItemToCart } = require("../../utils/commonActions");

describe("Add an item to shopping cart Test", () => {
  it("Add item to cart", async () => {
    await browser.url("");
    await selectItem();
    expect(await productPage.verifyProductSolActiveShort.getText()).to.contain(
      "Sol Active Short"
    );
    await addItemToCart();
    expect(await productPage.productAddedConfirmation.getText()).to.contain(
      "You added Sol Active Short to your shopping cart."
    );
  });
});
