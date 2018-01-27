const NodeEnvironment = require('jest-environment-node');
const { Builder, Capabilities, By, until } = require('selenium-webdriver');

class WebDriverEnvironment extends NodeEnvironment {
  constructor(options) {
    super(options);
    this.browserName = options.testEnvironmentOptions.browser || 'chrome';
  }

  async setup() {
    await super.setup();

    const driver = await new Builder()
      .forBrowser(this.browserName)
      .build();

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
