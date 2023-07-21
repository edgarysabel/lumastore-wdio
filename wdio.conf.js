const allure = require("allure-commandline");

exports.config = {
  //
  // ====================
  // Runner Configuration
  // ====================
  // WebdriverIO supports running e2e tests as well as unit and component tests.
  runner: "local",
  hostname: "localhost",
  port: 4444,

  //
  // ==================
  // Specify Test Files
  // ==================

  specs: ["./test/specs/TC-001.**"],
  //
  // ============
  // Capabilities
  // ============

  maxInstances: 1,

  capabilities: [
    {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--headless"],
      },
    },
  ],
  //
  // ===================
  // Test Configurations
  // ===================

  logLevel: "info",
  bail: 0,
  //
  baseUrl: "https://magento.softwaretestingboard.com/",
  //
  // Default timeout for all waitFor* commands.
  waitforTimeout: 10000,
  //
  // Default timeout in milliseconds for request
  connectionRetryTimeout: 120000,
  //
  // Default request retries count
  connectionRetryCount: 3,
  //
  // Test runner services
  services: ["chromedriver"],

  // Framework you want to run your specs with.

  framework: "mocha",
  //
  reporters: ["spec"],

  //
  // Options to be passed to Mocha.
  // See the full list at http://mochajs.org/
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
  reporters: [
    [
      "allure",
      {
        outputDir: "testReports/allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
      },
    ],
  ],

  onComplete: function () {
    const reportError = new Error("Could not generate Allure report");
    const generation = allure([
      "generate",
      "testReports/allure-results",
      "--clean",
    ]);
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
  afterStep: async function (
    step,
    scenario,
    { error, duration, passed },
    context
  ) {
    if (error) {
      await browser.takeScreenshot();
    }
  },
};
