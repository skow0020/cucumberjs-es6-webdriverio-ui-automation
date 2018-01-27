const path = require('path');

module.exports = {
  getFile: function (name) {
    return this.options.resources.find((file) => { file.includes(name); });
  },

  getScreenshot: function (step) {
    const scenarioName = step.scenario.name.replace(/\s/g, '_').toLowerCase();
    const stepName = step.name.replace(/\s/g, '_').toLowerCase();
    const { browserName } = this.desiredCapabilities.browserName;
    const screenshot = `${browserName}.${scenarioName}.${stepName}.png`;
    const fileName = path.join(browser.options.screenshotPath, screenshot);
    this.saveScreenshot(fileName);
  }
};