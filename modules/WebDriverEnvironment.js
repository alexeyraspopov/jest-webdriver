const NodeEnvironment = require('jest-environment-node');
const { Capabilities, By, until } = require('selenium-webdriver');
const Builder = require('./WebDriverBuilder');

class WebDriverEnvironment extends NodeEnvironment {
  async setup() {
    await super.setup();

    const capabilities = Capabilities.chrome();
    const driver = await new Builder()
      .withCapabilities(capabilities)
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
