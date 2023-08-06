const { config } = require("./wdio.shared.conf");

// ====================
// Runner Configuration
// ====================
// WebdriverIO supports running e2e tests as well as unit and component tests.
(config.runner = "local"),
  (config.hostname = "localhost"),
  (config.port = 4444),
  //
  // ==================
  // Specify Test Files
  // ==================
  //../test/specs/TC-002.addAddress.uitest.js
  (config.specs = ["../test/specs/TC-001.**"]),
  //
  // ============
  // Capabilities
  // ============

  (config.maxInstances = 1),
  (config.capabilities = [
    {
      browserName: "chrome",
    },
  ]),
  (config.before = function (capabilities, specs) {
    browser.setWindowSize(1920, 1080); // Set the window size to 1920x1080
  }),
  (exports.config = config);
