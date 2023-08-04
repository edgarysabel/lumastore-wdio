const allure = require("allure-commandline");

exports.config = {
  beforeEach: async function () {
    await browser.url("");
  }, //
  // ===================
  // Test Configurations
  // ===================

  logLevel: "info",
  bail: 0,
  //
  baseUrl: "https://magento.softwaretestingboard.com/",
  //
  // Default timeout for all waitFor* commands.
  waitforTimeout: 60000,
  //
  // Default timeout in milliseconds for request
  connectionRetryTimeout: 120000,
  //
  // Default request retries count
  connectionRetryCount: 10,
  //
  // Test runner services
  services: ["chromedriver"],

  // Framework you want to run your specs with.

  framework: "mocha",
  //
  reporters: [
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
      },
    ],
  ],

  //
  // Options to be passed to Mocha.
  // See the full list at http://mochajs.org/
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },

  onComplete: function () {
    const reportError = new Error("Could not generate Allure report");
    const generation = allure(["generate", "allure-results", "--clean"]);
    return new Promise((resolve, reject) => {
      const generationTimeout = setTimeout(() => reject(reportError), 5000);

      generation.on("exit", function (exitCode) {
        clearTimeout(generationTimeout);

        if (exitCode !== 0) {
          return reject(reportError);
        }

        console.log("Allure report successfully generated");
        resolve();
      });
    });
  },

  //Execute command after every test
  afterTest: async function (
    step,
    scenario,
    { error, duration, passed },
    context
  ) {
    await browser.takeScreenshot();
  },

  before: async function () {
    await browser.url("");
    await browser.maximizeWindow();
  },
};
