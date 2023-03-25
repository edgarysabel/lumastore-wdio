class SignUpPage {
    get firstNameInput() { return $('input[name="firstname"]'); }
    get lastNameInput() { return $('input[name="lastname"]'); }
    get emailInput() { return $('input[name="email"]'); }
    get passwordInput() { return $('input[name="password"]'); }
    get passwordConfirmationInput() { return $('input[name="password_confirmation"]'); }
    get signUpButton() { return $('button[title="Create an Account"]'); }

    open() {
        browser.url('/customer/account/create/');
    }

    signUp(firstName, lastName, email, password, passwordConfirmation) {
        this.firstNameInput.setValue(firstName);
        this.lastNameInput.setValue(lastName);
        this.emailInput.setValue(email);
        this.passwordInput.setValue(password);
        this.passwordConfirmationInput.setValue(passwordConfirmation);
        this.signUpButton.click();
    }
}

module.exports = new SignUpPage();