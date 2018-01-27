# jest-environment-webdriver

Connect [Jest](http://facebook.github.io/jest/) tests to [Selenium WebDriver](http://www.seleniumhq.org/projects/webdriver/).

    npm install --save-dev jest-environment-webdriver

## Limitations

The project is in progress. It only supports running [preinstalled](https://github.com/SeleniumHQ/selenium/tree/master/javascript/node/selenium-webdriver#installation) WebDrivers (Chrome, Safari, Firefox, Edge, IE) without additional options. Capabilities configuration, screenshots report will be added soon.

## Usage

Set [`testEnvironment`](https://facebook.github.io/jest/docs/en/configuration.html#testenvironment-string) to `jest-environment-webdriver`.

Select target browser using [`testEnvironmentOptions`](https://facebook.github.io/jest/docs/en/configuration.html#testenvironmentoptions-object):

    "testEnvironmentOptions": {
      "browser": "safari"
    }

## Environment API

Next global objects and functions are available in testing code.

 * `browser` — reference to [`WebDriver`](http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebDriver.html) instance
 * `by` — alias to [`By`](http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_By.html)
 * `element` — alias to [`Driver#findElement`](http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Driver.html#findElement)
 * `until` — alias to [`until`](http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/until.html).
