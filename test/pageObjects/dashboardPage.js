const DataGenerator = require("../../utils/dataGenerator");

const dataGenerator = new DataGenerator();
const { countryName } = dataGenerator;

class DashboardPage {
  get welcomeMessage() {
    return $(
      '//div[contains(text(),"Thank you for registering with Main Website Store.")]'
    );
  }
  get userInfo() {
    return $('//div[@class="box box-information"]//p');
  }

  get addressBook() {
    return $("(//*[@id='block-collapsible-nav']/ul/li)[6]");
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
}
module.exports = new DashboardPage();
