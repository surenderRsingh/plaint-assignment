
exports.hooks = {
  // run before each test
  before: function (test, context) {
    browser.url(browser.config.appUrl);
    browser.maximizeWindow();
  },

  AfterStep: ({result}) => {
    const cucumber = require('@cucumber/cucumber');

    if (result.status === cucumber.Status.FAILED) {
      console.log("FAILED");
      const cucumberJson = require("wdio-cucumberjs-json-reporter").default;
     
      cucumberJson.attach(browser.takeScreenshot(), "image/png");
    }
  },
};
