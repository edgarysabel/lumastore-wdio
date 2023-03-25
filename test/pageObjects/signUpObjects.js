class SignUpPage {
    get firstNameInput() { return $('#firstname'); }
    get lastNameInput() { return $('#lastname'); }
    get emailInput() { return $('#email_address'); }
    get passwordInput() { return $('#password'); }
    get passwordConfirmationInput() { return $('#password-confirmation'); }
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