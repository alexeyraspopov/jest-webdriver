jest.mock('jest-environment-node', () =>
  require('../__mocks__/NodeEnvironment')
);
jest.mock('selenium-webdriver', () =>
  require('../__mocks__/SeleniumWebDriver')
);

const WebDriverEnvironment = require('../WebDriverEnvironment');
const NodeEnvironment = require('../__mocks__/NodeEnvironment');
const { Builder, By, until } = require('../__mocks__/SeleniumWebDriver');

test('node environment extension', () => {
  const environment = new WebDriverEnvironment({});
  expect(environment instanceof NodeEnvironment).toBeTruthy();
});

test('browser name configuration', () => {
  const config = { testEnvironmentOptions: { browser: 'safari' } };
  const environment = new WebDriverEnvironment(config);
  expect(environment.browserName).toBe('safari');
});

test('browser environment setup', async () => {
  const config = { testEnvironmentOptions: { browser: 'firefox' } };
  const environment = new WebDriverEnvironment(config);
  await environment.setup();
  expect(new Builder().forBrowser).toHaveBeenCalledWith('firefox');
  expect(new Builder().build).toHaveBeenCalled();
});

test('server environment setup', async () => {
  const seleniumAddress = 'http://localhost:4444/wd/hub';
  const config = { testEnvironmentOptions: { seleniumAddress } };
  const environment = new WebDriverEnvironment(config);
  await environment.setup();
  expect(new Builder().usingServer).toHaveBeenCalledWith(seleniumAddress);
  expect(new Builder().build).toHaveBeenCalled();
});

test('global environment interface', async () => {
  const environment = new WebDriverEnvironment({});
  const driver = new Builder().build();
  await environment.setup();
  environment.global.element('locator 1');
  environment.global.element.all('locator 2');

  expect(environment.global.by).toBe(By);
  expect(environment.global.browser).toBe(driver);
  expect(driver.findElement).toHaveBeenCalledWith('locator 1');
  expect(driver.findElements).toHaveBeenCalledWith('locator 2');
  expect(environment.global.until).toBe(until);
});

test('environment teardown', async () => {
  const environment = new WebDriverEnvironment({});
  await environment.setup();
  await environment.teardown();
  expect(NodeEnvironment.prototype.teardown).toHaveBeenCalled();
  expect(environment.driver.quit).toHaveBeenCalled();
});
