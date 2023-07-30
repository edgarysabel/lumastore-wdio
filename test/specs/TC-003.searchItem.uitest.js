const { expect } = require("chai");
const homePage = require("../pageObjects/homePage");
const searchResult = require("../pageObjects/searchResultsPage");

describe("Search item Test", () => {
  it("Search for an item", async () => {
    await homePage.searchBar.setValue("Sol Active Short");
    await browser.keys("Enter");
    expect(await searchResult.itemResult.getText()).to.contain(
      "Sol Active Short"
    );
  });
});
