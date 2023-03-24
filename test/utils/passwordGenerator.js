const faker = require('faker');

function generatePassword() {
    const lowerCase = faker.random.alpha({ count: 1, upcase: false });
    const upperCase = faker.random.alpha({ count: 1, upcase: true });
    const digit = faker.random.number({ min: 0, max: 9 }).toString();
    const specialChars = '!@#$%^&*()';
    const specialChar = specialChars[Math.floor(Math.random() * specialChars.length)];

    const randomPassword = faker.internet.password(6, false);
    const combinedPassword = lowerCase + upperCase + digit + specialChar + randomPassword;

    return combinedPassword;
}

module.exports = generatePassword;