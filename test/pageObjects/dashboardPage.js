const DataGenerator = require("../../utils/dataGenerator");

const dataGenerator = new DataGenerator();
const {countryName, stateName, randomNum} = dataGenerator;


class DashboardPage {
  get welcomeMessage() {
    return $('//div[contains(text(),"Thank you for registering with Main Website Store.")]');
  }
  get userInfo() {
    return $('//div[@class="box box-information"]//p');
  }

  get addressBook (){
    return $("//ul[@class='nav items']//a[contains(text(),'Address Book')]");
  }

  get telephone (){
    return $("//input[@id='telephone']");
  }

  get streetAddress (){
    return $("//input[@id='street_1']");
  }

  get city (){
    return $("//input[@id='city']");
  }

  get state (){
    return $("//select[@id='region_id']");
  }

  get zipcodeBox(){
    return $("//input[@id='zip']");
  }

  get country(){
    return $("//select[@id='country']/option[text()='"+countryName+"']");
  }

  get saveAddressButton (){
    return $("//button/span [contains(text(),'Save Address')]");
  }

  get addressSavedMessage(){
    return $("//div[@class='messages']//div[contains(text(),'You saved the address.')]");
  }

  /*This function selects a state according to the country provided. For some countries, 
  the xpath used to locate the object varies due to the input methods being different for some countries.*/
  selectState(){
    let state ="";

    switch(countryName){
      case "Australia":
      case "Austria":
      case "Switzerland":
      case "United States":
      case "Belgium":
      case "Brazil":
      case "Canada":
      case "Estonia":
      case "Germany":
      case "India":
      case "Mexico":
        state = $("//select[@id='region_id']/option[contains(text(),'"+stateName+"')]");
        state.click();
        break;
      case "Poland":
      case "Romania":
      case "Spain":
      case "China":
      case "Colombia":
      case "Croatia":
      case "Finland":
      case "France":
      case "Latvia":
      case "Lithuania":
        state = $("//select[@id='region_id']/option["+randomNum+"]");
        state.click();
      default:
        state = $("//input[@id='region']");
        state.setValue(stateName);
        break;
    }

  }
}
module.exports = new DashboardPage();
