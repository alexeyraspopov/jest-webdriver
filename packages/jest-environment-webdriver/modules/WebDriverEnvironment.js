const NodeEnvironment = require('jest-environment-node');
const { Builder, By, until } = require('selenium-webdriver');

class WebDriverEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
    const options = config.testEnvironmentOptions || {};
    this.browserName = options.browser || 'chrome';
    this.seleniumAddress = options.seleniumAddress || null;
  }

  async setup() {
    await super.setup();
    
    let driver = new Builder();
    if (this.seleniumAddress) {
      driver = driver.usingServer(this.seleniumAddress);
    }
    driver = await driver.forBrowser(this.browserName).build();

    this.driver = driver;

    this.global.by = By;
    this.global.browser = driver;
    this.global.element = locator => driver.findElement(locator);
    this.global.element.all = locator => driver.findElements(locator);
    this.global.until = until;
  }

  async teardown() {
    await this.driver.quit();
    await super.teardown();
  }
}

module.exports = WebDriverEnvironment;
