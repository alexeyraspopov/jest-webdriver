# jest-environment-webdriver

Connect [Jest](http://facebook.github.io/jest/) tests to [Selenium WebDriver](http://www.seleniumhq.org/projects/webdriver/).

    npm install --save-dev jest-environment-webdriver

## Usage

Set [`testEnvironment`](https://facebook.github.io/jest/docs/en/configuration.html#testenvironment-string) to `jest-environment-webdriver` and select target browser using [`testEnvironmentOptions`](https://facebook.github.io/jest/docs/en/configuration.html#testenvironmentoptions-object):

    "testEnvironment": "jest-environment-webdriver",
    "testEnvironmentOptions": {
      "browser": "safari"
    }

## Environment API

Next global objects and functions are available in testing code.

 * `browser` — reference to [`WebDriver`](http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebDriver.html) instance
 * `by` — alias to [`By`](http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_By.html)
 * `element` — alias to [`Driver#findElement`](http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Driver.html#findElement)
 * `element.all` — alias to [`Driver#findElements`](http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/chrome_exports_Driver.html#findElements)
 * `until` — alias to [`until`](http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/until.html).
