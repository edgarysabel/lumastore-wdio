class MenSection {
  get bottomsCategory() {
    return $('//a[contains(text(), "Bottoms")]');
  }
  get selectProductSolActiveShort() {
    return $('//a[contains(text(),"Sol Active Short")]');
  }
}
module.exports = new MenSection();
