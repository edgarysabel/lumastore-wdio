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

    async signUp(firstName, lastName, email, password, passwordConfirmation) {
        await this.firstNameInput.waitForExist();
        this.firstNameInput.setValue(firstName);

        await this.lastNameInput.waitForExist();
        this.lastNameInput.setValue(lastName);

        await this.emailInput.waitForExist();
        this.emailInput.setValue(email);

        await this.passwordInput.waitForExist();
        this.passwordInput.setValue(password);

        await this.passwordConfirmationInput.waitForExist();
        this.passwordConfirmationInput.setValue(passwordConfirmation);

        await this.signUpButton.waitForExist();
        this.signUpButton.click();
    }
}

module.exports = new SignUpPage();