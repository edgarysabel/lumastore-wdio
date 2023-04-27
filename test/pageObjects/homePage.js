class HomePage {
  get createAccountLink() {
    return $(
      '//div[@class="panel header"]//a[contains(text(), "Create an Account")]'
    );
  }

  get menShoppingMenuItem() {
    return $('(//span[contains(text(), "Men")])[1]');
  }
}
module.exports = new HomePage();
