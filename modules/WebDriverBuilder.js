const { Builder } = require('selenium-webdriver');
const { ServiceBuilder } = require('selenium-webdriver/chrome');

const CHROME_PATH = null;

class WebDriverBuilder {
  constructor() {
    this.capabilities = null;
  }

  withCapabilities(capabilities) {
    this.capabilities = capabilities;
    return this;
  }

  async build() {
    const serviceBuilder = new ServiceBuilder(CHROME_PATH);

    return new Builder()
      .withCapabilities(this.capabilities)
      .setChromeService(serviceBuilder)
      .build();
  }
}

module.exports = WebDriverBuilder;
