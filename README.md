# Jest WebDriver Integration

Connect [Jest](http://facebook.github.io/jest/) tests to [Selenium WebDriver](http://www.seleniumhq.org/projects/webdriver/).

## Limitations

The project is in progress. It only supports running [preinstalled](https://github.com/SeleniumHQ/selenium/tree/master/javascript/node/selenium-webdriver#installation) WebDrivers (Chrome, Safari, Firefox, Edge, IE) without additional options. Capabilities configuration will be added soon. Pull requests welcomed.

## Usage

The project includes next packages that are available via NPM:

 * [`jest-environment-webdriver`](./packages/jest-environment-webdriver) — custom Jest environment that allows tests to communicate with Selenium WebDriver
 * [`jest-screenshot-reporter`](./packages/jest-screenshot-reporter) — complementary Jasmine reporter that captures screenshots for failed tests
