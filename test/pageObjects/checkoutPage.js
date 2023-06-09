class checkoutPage{

get nextButton() {
    return $("//button/span[contains(text(),'Next')]");
}

get shippingMethods(){
    return $("//*[@value='flatrate_flatrate']");
}


get placeOrderButton() {
    return $("//button/span[contains(text(),'Place Order')]");
}

get checkoutConfirmation(){
    return $("//h1/span[contains(text(),'Thank you for your purchase!')]");
}

}

module.exports = new checkoutPage;