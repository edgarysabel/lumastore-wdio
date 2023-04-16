class SignUpPage {
  get firstNameInput() {
    return $('input[name="firstname"]');
  }

  get lastNameInput() {
    return $('input[name="lastname"]');
  }

  get emailInput() {
    return $('input[name="email"]');
  }

  get passwordInput() {
    return $('input[name="password"]');
  }

  get passwordConfirmationInput() {
    return $('input[name="password_confirmation"]');
  }

  get signUpButton() {
    return $('button[title="Create an Account"]');
  }

  get welcomeMessage() {
    return $(
      '//div[contains(text(),"Thank you for registering with Main Website Store.")]'
    );
  }
  async open() {
    await browser.url("/customer/account/create/");
  }

  async signUp(firstName, lastName, email, password) {
    await this.firstNameInput.setValue(firstName);
    await this.lastNameInput.setValue(lastName);
    await this.emailInput.setValue(email);
    await this.passwordInput.setValue(password);
    await this.passwordConfirmationInput.setValue(password);
  }
}

module.exports = new SignUpPage();
