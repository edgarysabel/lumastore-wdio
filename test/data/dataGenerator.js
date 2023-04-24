const faker = require("faker");

class DataGenerator {
  constructor() {
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.email = faker.internet.email();
    this.password = this.generatePassword();
  }
  //This function makes the password more specific since the password field on the page requires at least 8 characters, including uppercase and lowercase letters, at least one special character, and at least one number.
  generatePassword() {
    const lowerCase = faker.random.alpha({ count: 1, upcase: false });
    const upperCase = faker.random.alpha({ count: 1, upcase: true });
    const digit = faker.random.number({ min: 0, max: 9 }).toString();
    const specialChars = "!@#$%^&*()";
    const specialChar =
      specialChars[Math.floor(Math.random() * specialChars.length)];

    const randomPassword = faker.internet.password(6, false);
    const combinedPassword =
      lowerCase + upperCase + digit + specialChar + randomPassword;

    return combinedPassword;
  }
}

module.exports = DataGenerator;
