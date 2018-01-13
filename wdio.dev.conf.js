const config = require('./wdio.conf').config;

/**
 * custom options for dev
 *
 * this file is for implementing and debugging locally
 */

config.baseUrl = 'https://www.google.com/';
config.specs = [ './test/features/*.feature' ];

/**
 * selenium config
 */
config.services = [ 'selenium-standalone' ];
config.seleniumLogs = './logs/selenium.log';
config.maxInstances = 1;
config.capabilities = [
    {
        browserName: 'chrome'
    },
    {
        browserName: 'firefox'
    }
];

exports.config = config;