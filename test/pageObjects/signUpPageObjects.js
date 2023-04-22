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
}

module.exports = new SignUpPage();
