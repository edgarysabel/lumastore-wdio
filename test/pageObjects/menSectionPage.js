class MenSection {
  get bottomsCategory() {
    return $('//a[contains(text(), "Bottoms")]');
  }
}
module.exports = new MenSection();
