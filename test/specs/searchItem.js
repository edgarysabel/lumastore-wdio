const { expect } = require("chai");
const homePage = require("../pageObjects/homePage");
const searchResult = require("../../test/pageObjects/searchResultsPage");

describe("Search item Test", () => {
  it("Search for an item", async () => {
    await browser.url("");
    await homePage.searchBar.setValue("Sol Active Short");
    await browser.keys("Enter");
    expect(await searchResult.itemResult.getText()).to.contain(
      "Sol Active Short"
    );
  });
});
