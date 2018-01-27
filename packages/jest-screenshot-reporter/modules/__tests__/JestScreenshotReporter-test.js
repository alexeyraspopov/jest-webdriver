jest.mock('mkdirp', () => require('../__mocks__/MakeDirPModule'));
jest.mock('fs', () => require('../__mocks__/FileSystemModule'));

const JestScreenshotReporter = require('../JestScreenshotReporter');
const browser = require('../__mocks__/WebDriverInstance');
const mkdirp = require('mkdirp');
const fs = require('fs');

test('passed test skipping', async () => {
  const reporter = new JestScreenshotReporter({ browser });
  const result = { status: 'passed', fullName: 'something has passed' };
  await reporter.specDone(result);
  expect(mkdirp.sync).not.toHaveBeenCalled();
  expect(fs.writeFileSync).not.toHaveBeenCalled();
});

test('failed test screenshot capturing', async () => {
  const reporter = new JestScreenshotReporter({ browser });
  const result = { status: 'failed', fullName: 'something has failed' };
  await reporter.specDone(result);
  expect(mkdirp.sync).toHaveBeenCalledWith('./reports/screenshots');
  expect(fs.writeFileSync).toHaveBeenCalledWith(
    './reports/screenshots/something has failed.png',
    browser.screenshotContent,
    'base64'
  );
});
