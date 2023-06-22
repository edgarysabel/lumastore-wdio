class ProductPage {
  get verifyProductSolActiveShort() {
    return $('//span[contains(text(),"Sol Active Short")]');
  }
  get sizeOption32() {
    return $('//div[@id="option-label-size-143-item-175"]');
  }

  get colorOption() {
    return $('//*[@id="option-label-color-93-item-50"]');
  }

  get addToCartButton() {
    return $('//*[@id="product-addtocart-button"]');
  }

  get productAddedConfirmation() {
    return $(
      '//div[contains(text(),"You added Sol Active Short to your") and .//a[text()="shopping cart"]]'
    );
  }

  get cartIcon(){
    return $("//div[@class='minicart-wrapper']");
  }

  get checkoutButton(){
    return $("//button[@id='top-cart-btn-checkout']");
  }
}
module.exports = new ProductPage();
