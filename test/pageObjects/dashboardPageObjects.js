class DashboardPage {
  get welcomeMessage() {
    return $(
      '//div[contains(text(),"Thank you for registering with Main Website Store.")]'
    );
  }
  get userInfo() {
    return $('//div[@class="box box-information"]//p');
  }
}
module.exports = new DashboardPage();
