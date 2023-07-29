class SignUpPage {
  get firstNameInput() {
    return $('//*[@id="firstname"]');
  }

  get lastNameInput() {
    return $('//*[@id="lastname"]');
  }

  get signUpEmailInput() {
    return $('//*[@id="email_address"]');
  }

  get signUpPasswordInput() {
    return $('//*[@id="password"]');
  }

  get passwordConfirmationInput() {
    return $('//*[@id="password-confirmation"]');
  }

  get signUpButton() {
    return $('//button[@*="Create an Account"]//span');
  }
}
module.exports = new SignUpPage();
