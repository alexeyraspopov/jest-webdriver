const browser = {
  takeScreenshot: jest.fn(() => browser.screenshotContent),
  screenshotContent: 'this is screenshot in base64',
};

module.exports = browser;
