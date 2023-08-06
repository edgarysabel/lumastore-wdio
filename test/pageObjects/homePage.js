class HomePage {
  get createAccountLink() {
    return $(
      '//div[@class="panel header"]//a[contains(text(), "Create an Account")]'
    );
  }

  get menShoppingMenuItem() {
    return $('(//span[contains(text(), "Men")])[1]');
  }

  get searchBar() {
    return $("//input[@id='search']");
  }

  get signInLink() {
    return $("=Sign In");
  }
}
module.exports = new HomePage();
