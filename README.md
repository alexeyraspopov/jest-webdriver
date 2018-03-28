# Jest WebDriver Integration

Connect [Jest][1] tests to [Selenium WebDriver][2].

## Limitations

The project is in progress. It only supports running [preinstalled][3] WebDrivers (Chrome, Safari, Firefox, Edge, IE) without additional options. Capabilities configuration will be added soon. Pull requests welcomed.

## Usage

The project includes next packages that are available via NPM:

 * [`jest-environment-webdriver`](./packages/jest-environment-webdriver) — custom Jest environment that allows tests to communicate with Selenium WebDriver
 * [`jest-screenshot-reporter`](./packages/jest-screenshot-reporter) — complementary Jasmine reporter that captures screenshots for failed tests

## Examples

In `examples` folder you can find complete demo projects with installed Jest WebDriver packages and a sample test case that does a thing.

 * [Basic Test Case](https://github.com/alexeyraspopov/jest-webdriver/tree/master/examples/basic-testcase) — a demo project that includes minimum configuration and runs a single test that is written with all the recommended design patterns

## Documentation

Complete documentation and guidelines are in progress. You can find basic API reference in each package's folder.

As a complete "getting started" guide please read [Testing javascript applications with Selenium, Async/Await, and Jest](https://blog.evantahler.com/testing-javascript-applications-with-selenium-async-await-and-jest-7580ed074f2b).

 [1]: http://facebook.github.io/jest/
 [2]: http://www.seleniumhq.org/projects/webdriver/
 [3]: https://github.com/SeleniumHQ/selenium/tree/master/javascript/node/selenium-webdriver#installation
