# Jest WebDriver Integration

Connect [Jest][1] tests to [Selenium WebDriver][2].

## Limitations

The project is in progress. It only supports running [preinstalled][3] WebDrivers (Chrome, Safari, Firefox, Edge, IE) without additional options. Capabilities configuration will be added soon. Pull requests welcomed.

## Usage

The project includes next packages that are available via NPM:

 * [`jest-environment-webdriver`](./packages/jest-environment-webdriver) — custom Jest environment that allows tests to communicate with Selenium WebDriver
 * [`jest-screenshot-reporter`](./packages/jest-screenshot-reporter) — complementary Jasmine reporter that captures screenshots for failed tests

 [1]: http://facebook.github.io/jest/
 [2]: http://www.seleniumhq.org/projects/webdriver/
 [3]: https://github.com/SeleniumHQ/selenium/tree/master/javascript/node/selenium-webdriver#installation
