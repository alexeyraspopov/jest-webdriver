const JestScreenshotReporter = require('jest-screenshot-reporter');

jasmine.getEnv().addReporter(new JestScreenshotReporter({ browser }));
