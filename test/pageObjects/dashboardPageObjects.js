class DashboardPage {
  get welcomeMessage() {
    return $(
      '//div[contains(text(),"Thank you for registering with Main Website Store.")]'
    );
  }
}
module.exports = new DashboardPage();
