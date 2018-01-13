const steps         = require('./test/support/step.loader');
const path          = require('path');
const mkdirp        = require('mkdirp');

exports.config = {


    /**
     * server configurations
     */
    host: 'localhost',
    port: 4444,
    path: '/wd/hub',


    /**
     * features
     */
    specs: [
        './test/features/**/*.feature'
    ],


    /**
     * baseUrl
     */
    baseUrl: 'https://www.google.com/',


    /**
     * capabilities
     */
    maxInstances: 4,
    capabilities: [
        {
            browserName: '414px',
            chromeOptions: {
                args: [ '--window-size=414,736' ]
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
        //     browserName: '768px',
        //     chromeOptions: {
        //         args: [ '--window-size=768,1024' ]
        //     }
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
        },
    ],


    /**
     * test configurations
     * logLevel: silent | verbose | command | data | result | error
     */
    logLevel: 'silent',
    coloredLogs: true,
    deprecationWarnings: true,
    screenshotPath: './results/screenshots',
    waitforTimeout: 15000,
    framework: 'cucumber',
    cucumberOpts: {
        compiler: ['js:babel-core/register'],
        timeout: 30000,
        require: steps.load(),
        ignoreUndefinedDefinitions: false,
        snippetSyntax: 'synchronous',
        snippets: false
    },
    reporters: [
        'spec',
        'junit'
    ],
    reporterOptions: {
        junit: {
            outputDir: './results/junit'
        }
    },

    before: function (capabilities, specs) {
        mkdirp.sync(browser.options.screenshotPath);
    },

    // Runs before each test scenario
    beforeScenario: function (scenario) {
        browser.url('/');
    },

    afterStep: function(result) {
        if (result.status === 'failed') {
            let browserName = browser.desiredCapabilities.browserName;
            let scenarioName = result.step.scenario.name.replace(/\s/g, '_').toLowerCase();
            let stepName = result.step.name.replace(/\s/g, '_').toLowerCase();
            let screenshot = `${browserName}.${scenarioName}.${stepName}.png`;
            let fileName = path.join(browser.options.screenshotPath, screenshot);
            browser.saveScreenshot(fileName);
        }
    }
};