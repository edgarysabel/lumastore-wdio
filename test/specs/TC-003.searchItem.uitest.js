const { expect } = require("chai");
const { goToUrl } = require("../../utils/commonActions");
const homePage = require("../pageObjects/homePage");
const searchResult = require("../pageObjects/searchResultsPage");
const testItem = require("../../utils/data/testItem");

describe("Search item Test", () => {
  it("Search for an item", async () => {
    await goToUrl();
    await homePage.searchBar.setValue(testItem.item);
    await browser.keys("Enter");
    await expect(await searchResult.itemResult.getText()).to.contain(
      testItem.item
    );
  });
});
