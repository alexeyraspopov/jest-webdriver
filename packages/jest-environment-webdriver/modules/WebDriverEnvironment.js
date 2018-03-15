const NodeEnvironment = require('jest-environment-node');
const { Builder, By, until } = require('selenium-webdriver');

class WebDriverEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
    const options = config.testEnvironmentOptions || {};
    this.browserName = options.browser || 'chrome';
    this.usingServer = options.usingServer || null;
  }

  async setup() {
    await super.setup();
    
    let driver = await new Builder();
    if (this.usingServer) {
      driver = await driver.usingServer(this.usingServer);
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
