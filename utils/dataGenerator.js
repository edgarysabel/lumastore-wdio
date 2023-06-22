const faker = require("faker");

class DataGenerator {
  constructor() {
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.email = faker.internet.email();
    this.password = this.generatePassword();
    this.phoneNumber = faker.phone.phoneNumber();
    this.city = faker.address.cityName();
    this.street = faker.address.streetName();
    this.zipCode = faker.address.zipCode();
    this.countryName = "United States";
    this.stateName = this.generateState();
  }
  /*
  This function makes the password more specific since the password 
  field on the page requires at least 8 characters, including uppercase 
  and lowercase letters, at least one special character, and at least one number.
  */
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

  /*This function sets a specific locale depending on the country provided, 
  if there is not a locale corresponding to the provided country then the default locale is set to en_US*/
  generateState() {
    const originalLocale = faker.locale;

    switch (this.countryName) {
    case 'United States':
      faker.setLocale('en_US');
      break;
    default:
        faker.setLocale('en_US');
    }
    const specificState = faker.address.state();
    faker.locale = originalLocale;
    return specificState;
  }

}

module.exports = DataGenerator;
