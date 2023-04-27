class ProductPage {
  get itemResult() {
    return $('//a[contains(text(),"Sol Active Short")]');
  }
}
module.exports = new ProductPage();
