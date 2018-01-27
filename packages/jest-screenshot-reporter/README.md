# jest-screenshot-reporter

Capture screenshots as a report for failed tests on [Selenium WebDriver](http://www.seleniumhq.org/projects/webdriver/).

    npm install --save-dev jest-screenshot-reporter

## Usage

While Jest reporters mechanism does not allow doing stuff after each test, the screenshot reporter should be added to Jasmine config.

Create a file for Jasmine configuration:

    const JestScreenshotReporter = require('jest-screenshot-reporter');
    jasmine.getEnv().addReporter(new JestScreenshotReporter({ browser }));

And add it Jest config:

    "setupTestFrameworkScriptFile": "./jasmine.config.js",

## Reporter API

The reporter receives next options when instantiating via `new JestScreenshotReporter({ ... })`:

 * `browser` — global [`WebDriver`](http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebDriver.html) instance that is introduced by [`jest-environment-webdriver`](https://github.com/alexeyraspopov/jest-webdriver/tree/master/packages/jest-environment-webdriver)
 * `savePath` — path to the screenshots destination folder. Default is `./reports/screenshots`
