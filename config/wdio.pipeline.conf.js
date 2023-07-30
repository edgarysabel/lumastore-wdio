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

  (config.specs = ["../test/specs/TC-003.**"]),
  //
  // ============
  // Capabilities
  // ============

  (config.maxInstances = 1),
  (config.capabilities = [
    {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--headless"],
      },
    },
  ]);

exports.config = config;
