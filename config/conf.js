// An example configuration file.
exports.config = {
  //directConnect: true,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  chromeDriver: '../grid/webdriver/chromedriver.exe',
  IEDriverServer: '../grid/webdriver/IEDriverServer.exe',
  geckodriver: '../grid/webdriver/geckodriver.exe',
  

  // Capabilities to be passed to the webdriver instance.
  сapabilities: {
	browserName: 'chrome',
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['../tests/tests.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  selenimServerjar: '../grid/selenium-server-standalone-3.4.0.jar',
};
