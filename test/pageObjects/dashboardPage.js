const DataGenerator = require("../../utils/dataGenerator");
const loginData = require("../../utils/data/loginData");

const dataGenerator = new DataGenerator();
const { countryName } = dataGenerator;

class DashboardPage {
  get welcomeMessage() {
    return $(
      '//div[contains(text(),"Thank you for registering with Main Website Store.")]'
    );
  }

  get loginWelcomeMessage() {
    return $(
      `(//*[contains(text(),'Welcome, ${loginData.user_name} ${loginData.user_lastname}')])[1]`
    );
  }
  get userInfo() {
    return $('//div[@class="box box-information"]//p');
  }

  get addressBook() {
    return $("//ul[@class='nav items']//a[contains(text(),'Address Book')]");
  }

  get telephone() {
    return $("//input[@id='telephone']");
  }

  get streetAddress() {
    return $("//input[@id='street_1']");
  }

  get city() {
    return $("//input[@id='city']");
  }

  get state() {
    return $("//select[@id='region_id']");
  }

  get zipcodeBox() {
    return $("//input[@id='zip']");
  }

  get country() {
    return $("//select[@id='country']/option[text()='" + countryName + "']");
  }

  get saveAddressButton() {
    return $("//button/span [contains(text(),'Save Address')]");
  }

  get addressSavedMessage() {
    return $(
      "//div[@class='messages']//div[contains(text(),'You saved the address.')]"
    );
  }
  get userOptionsMenu() {
    return $("(//button[@type='button'])[1]");
  }

  get myAccountOption() {
    return $("(//a[normalize-space()='My Account'])[1]");
  }
}
module.exports = new DashboardPage();
