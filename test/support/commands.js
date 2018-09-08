const path = require('path');

module.exports = {
  getFile: function (name) {
    return this.options.resources.find((file) => { file.includes(name); });
  },

  getScreenshot: function (step) {
    const scenarioName = step.scenario.name.replace(/\s/g, '_').toLowerCase();
    const stepName = step.name.replace(/\s/g, '_').toLowerCase();
    const capabilityBrowser = browser.desiredCapabilities.browserName;
    const screenshot = `${capabilityBrowser}.${scenarioName}.${stepName}.png`;
    const fileName = path.join(browser.options.screenshotsPath, screenshot);
    this.saveScreenshot(fileName);
  }
};
