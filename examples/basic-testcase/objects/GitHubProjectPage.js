class GitHubProjectPage {
  constructor() {
    this.licenseLabel = by.css('a[href*="LICENSE"]');
  }

  async getLicenseType() {
    let label = await element(this.licenseLabel);
    let licenseText = await label.getText();
    return licenseText.trim();
  }
}

module.exports = GitHubProjectPage;
