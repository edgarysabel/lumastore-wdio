const { expect } = require('chai');
const faker = require('faker');
const generatePassword = require('../utils/passwordGenerator');
const signUpObjects = require('../pageObjects/signUpObjects');
const DashboardObjects = require('../pageObjects/DashboardObjects');

describe('Sign-up Test', () => {

    it('should register a new user', async () => {

        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const email = faker.internet.email();
        const password = generatePassword();

        signUpObjects.open();
        signUpObjects.signUp(firstName, lastName, email, password, password);

        await signUpObjects.signUpButton.isExisting();

        await browser.waitUntil(
            async () => (await browser.getUrl()).includes('/customer/account/'),
            {
                timeout: 10000,
                timeoutMsg: 'Expected URL to include /customer/account/ but it did not',
            }
        );

        const currentUrl = await browser.getUrl();
        expect(currentUrl).to.include('/customer/account/');

        await DashboardObjects.verifyRegistration.isExisting();

    });

});