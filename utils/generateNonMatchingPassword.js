const faker = require("faker");

function generateNonMatchingPassword(originalPassword) {
  let nonMatchingPassword;
  do {
    nonMatchingPassword = faker.internet.password();
  } while (nonMatchingPassword === originalPassword);

  return nonMatchingPassword;
}

module.exports = generateNonMatchingPassword;
