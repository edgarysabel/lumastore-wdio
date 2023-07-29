class LoginPage {
  get loginEmailInput() {
    return $("//input[@id='email']");
  }

  get loginPasswordInput() {
    return $("//input[@id='pass']");
  }

  get loginBtn() {
    return $("(//*[@id='send2'])[1]");
  }
}
module.exports = new LoginPage();
