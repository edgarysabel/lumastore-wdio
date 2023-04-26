class HomePage {
  get createAccountLink() {
    return $(
      '//div[@class="panel header"]//a[contains(text(), "Create an Account")]'
    );
  }
}
module.exports = new HomePage();
