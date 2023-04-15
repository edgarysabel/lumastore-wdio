const faker = require("faker");
const generatePassword = require("../../utils/passwordGenerator");

const signUpTestData = {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  password: generatePassword(),
};

module.exports = signUpTestData;
