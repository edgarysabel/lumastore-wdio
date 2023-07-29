const testItem = require("../../utils/data/testItem");

class ProductPage {
  get selectedItemName() {
    return $(`//*[contains(text(),"${testItem.item}")]`);
  }
  get itemSize() {
    return $('//div[@id="option-label-size-143-item-175"]');
  }

  get itemColor() {
    return $('//*[@id="option-label-color-93-item-50"]');
  }

  get addToCartButton() {
    return $('//*[@id="product-addtocart-button"]');
  }

  get productAddedConfirmation() {
    return $(
      `//*[contains(text(),"You added ${testItem.item} to your") and .//a[text()="shopping cart"]]`
    );
  }

  get cartIcon() {
    return $("//div[@class='minicart-wrapper']");
  }

  get checkoutButton() {
    return $("//button[@id='top-cart-btn-checkout']");
  }
}
module.exports = new ProductPage();
