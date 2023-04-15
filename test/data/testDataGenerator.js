const faker = require("faker");
const generatePassword = require("../../utils/passwordGenerator");

function generateUserData() {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email();
  const password = generatePassword();

  return { firstName, lastName, email, password };
}

module.exports = {
  generateUserData,
  generatePassword,
};
