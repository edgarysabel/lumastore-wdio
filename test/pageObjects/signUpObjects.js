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

  get emptyFieldsError() {
    return $(
      '//div[contains(text(),"Thank you for registering with Main Website Store.")]'
    );
  }

  get firstNameFieldError() {
    return $('div[id="firstname-error"]');
  }

  get lastNameFieldError() {
    return $('div[id="lastname-error"]');
  }

  get emailFieldError() {
    return $('div[id="email_address-error"]');
  }

  get passwordFieldError() {
    return $('div[id="password-error"]');
  }

  get passwordConfirmationFieldError() {
    return $('div[id="password-confirmation-error"]');
  }

  get passwordMismatchError() {
    return $('//div[contains(text(),"Please enter the same value again.")]');
  }

  async open() {
    await browser.url("/customer/account/create/");
  }

  async signUp(
    firstName,
    lastName,
    email,
    password,
    nonMatchingPassword = null
  ) {
    await this.firstNameInput.setValue(firstName);
    await this.lastNameInput.setValue(lastName);
    await this.emailInput.setValue(email);
    await this.passwordInput.setValue(password);
    const passwordToConfirm = nonMatchingPassword
      ? nonMatchingPassword
      : password;
    await this.passwordConfirmationInput.setValue(passwordToConfirm);
  }
}

module.exports = new SignUpPage();
