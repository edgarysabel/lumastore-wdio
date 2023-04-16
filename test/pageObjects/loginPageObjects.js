class LoginPage {
  get emailInput() {
    return $('input[name="login[username]"]');
  }

  get passwordInput() {
    return $('input[name="login[password]"]');
  }

  get loginButton() {
    return $('button[class="action login primary"]');
  }

  async open() {
    await browser.url("/customer/account/login/");
  }

  async login(email, password) {
    await this.emailInput.setValue(email);
    await this.passwordInput.setValue(password);
    await this.loginButton.click();
  }
}

module.exports = new LoginPage();
