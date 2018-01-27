const path      = require('path');
const mkdirp    = require('mkdirp');
const glob      = require('glob').sync;
const commands  = require('./test/support/commands');

exports.config = {

  /**
   * perhaps user management here?
   */
  loggedIn: false,
  resources: glob(path.join(__dirname, '/test/resources/docs/*.pdf')),

  /**
   * server configurations
   */
  host: 'localhost',
  port: 4444,
  path: '/wd/hub',

  /**
   * features
   */
  specs: ['./test/features/*.feature'],

  /**
   * baseUrl
   */
  baseUrl: 'https://www.google.com/',

  /**
   * capabilities
   *
   * each of these is a target platform to execute tests on
   */
  maxInstances: 2,
  capabilities: [
    // {
    //   browserName: '414px',
    //   isMobile: true,
    //   chromeOptions: {
    //     args: [ '--window-size=414,736' ]
    //   }
    // },
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
      isMobile: false,
      chromeOptions: {
        args: ['--window-size=1920,1080']
      }
    }
  ],

  /**
   * test configurations
   * logLevel: silent | verbose | command | data | result | error
   */
  logLevel: 'silent',
  coloredLogs: true,
  deprecationWarnings: true,
  screenshotPath: './results/screenshots',
  waitforTimeout: 20000,
  framework: 'cucumber',
  cucumberOpts: {
    compiler: ['js:babel-core/register'],
    timeout: 30000,
    require: glob(path.join(__dirname, '/test/steps/*.steps.js')),
    ignoreUndefinedDefinitions: false,
    snippetSyntax: 'synchronous',
    snippets: false,
    failAmbiguousDefinitions: true
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

  before: function () {
    mkdirp.sync(browser.options.screenshotPath);

    browser.addCommand('getFile', commands.getFile.bind(browser));
    browser.addCommand('getScreenshot', commands.getScreenshot.bind(browser));
    // commands.load();
  },

  beforeScenario: function () {
    browser.url('/');
  },

  afterStep: function (result) {
    if (result.status === 'failed') {
      browser.getScreenshot(result.step);
    }
  }
};
