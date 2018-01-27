const { config } = require('./wdio.conf');

/**
 * custom options for test
 *
 * this file is for implementing and debugging locally
 *
 */

config.baseUrl = 'https://www.google.com/';
config.specs = [ './test/features/*.feature' ];

/**
 * selenium config
 *
 * browserName: browser we connect to, can be desktop browser or resolution by width
 * chromeOptions: Useful for setting browser configuration, EG: '--window-size=<width>,<height>'
 *
 */

config.services = [ 'selenium-standalone' ];
config.seleniumLogs = './logs/selenium.log';
config.maxInstances = 1;

exports.config = config;
