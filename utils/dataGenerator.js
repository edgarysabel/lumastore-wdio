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
    this.countryName = faker.address.country();
    this.stateName = this.generateState();
    this.randomNum =faker.random.number({ min: 2, max: 5 }) 
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
    const availableLocales = Object.keys(faker.locales);
    const randomLocale = faker.random.arrayElement(availableLocales);
    const originalLocale = faker.locale;

    switch (this.countryName) {
    case 'Azerbaijan':
      faker.setLocale('az');
      break;
    case 'Czech Republic':
      faker.setLocale('cz');
      break;
    case 'Germany':
      faker.setLocale('de');
      break;
    case 'Austria':
      faker.setLocale('de_AT');
      break;
    case 'Switzerland':
      faker.setLocale('de_CH');
      break;
    case 'Australia':
      faker.setLocale('en_AU');
      break;
    case 'Bork':
      faker.setLocale('en_BORK');
      break;
    case 'Canada':
      faker.setLocale('en_CA');
      break;
    case "United Kingdom":
      faker.setLocale('en_GB');
      break;
    case 'Ireland':
      faker.setLocale('en_IE');
      break;
    case 'India':
      faker.setLocale('en_IND');
      break;
    case 'United States':
      faker.setLocale('en_US');
      break;
    case 'Mexico':
      faker.setLocale('es_MX');
      break;
    case 'Farsi':
      faker.setLocale('fa');
      break;
    case 'Finland':
      faker.setLocale('fi');
      break;
    case 'France':
      faker.setLocale('fr');
      break;
    case 'Canada':
      faker.setLocale('fr_CA');
      break;
    case 'Switzerland':
      faker.setLocale('fr_CH');
      break;
    case 'Georgia':
      faker.setLocale('ge');
      break;
    case 'Indonesia':
      faker.setLocale('id_ID');
      break;
    case 'Italy':
      faker.setLocale('it');
      break;
    case 'Japan':
      faker.setLocale('ja');
      break;
    case 'South Korea':
      faker.setLocale('ko');
      break;
    case 'Norway':
      faker.setLocale('nb_NO');
      break;
    case 'Nepal':
      faker.setLocale('nep');
      break;
    case 'Netherlands':
      faker.setLocale('nl');
      break;
    case 'Belgium':
      faker.setLocale('nl_BE');
      break;
    case 'Poland':
      faker.setLocale('pl');
      break;
    case 'Brazil':
      faker.setLocale('pt_BR');
      break;
    case 'Russia':
      faker.setLocale('ru');
      break;
    case 'Slovakia':
      faker.setLocale('sk');
      break;
    case 'Sweden':
      faker.setLocale('sv');
      break;
    case 'Turkey':
      faker.setLocale('tr');
      break;
    case 'Ukraine':
      faker.setLocale('uk');
      break;
    case 'Vietnam':
      faker.setLocale('vi');
      break;
    case "Taiwan":
      faker.setLocale('zh_TW');
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
