const config = require('./wdio.conf').config;

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
config.capabilities = [
    {
        browserName: '414px',
        isMobile: true,
        chromeOptions: {
            args: ['--window-size=414,736']
        }
    },
    // {
    //     browserName: '736px',
    //     chromeOptions: {
    //         args: [ '--window-size=736,414']
    //     }
    //
    // },
    // {
    //     browserName: '768px',
    //     chromeOptions: {
    //         args: [ '--window-size=768,1024' ]
    //     }
    // },
    // {
    //     browserName: '1024px',
    //     chromeOptions: {
    //         args: [ '--window-size=1024,768' ]
    //     }
    // },
    {
        browserName: 'chrome',
        chromeOptions: {
            args: [ '--window-size=1920,1080' ]
        }
    }
];

exports.config = config;