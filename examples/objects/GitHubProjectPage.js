class GitHubProjectPage {
  constructor() {
    this.licenseLabel = by.css('a[href*="LICENSE"]');
  }

  async getLicenseType() {
    const label = await element(this.licenseLabel);
    const licenseText = await label.getText();
    return licenseText.trim();
  }
}

module.exports = GitHubProjectPage;
