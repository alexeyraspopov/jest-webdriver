const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

class JestScreenshotReporter {
  constructor({ browser, savePath = './reports/screenshots' }) {
    this.browser = browser;
    this.savePath = savePath;
  }

  async specDone(result) {
    if (result.status === 'failed') {
      const screen = await this.browser.takeScreenshot();
      const filename = path.format({ dir: this.savePath, name: result.fullName, ext: '.png' });
      mkdirp.sync(this.savePath);
      fs.writeFileSync(filename, screen, 'base64');
    }
  }
}

module.exports = JestScreenshotReporter;
