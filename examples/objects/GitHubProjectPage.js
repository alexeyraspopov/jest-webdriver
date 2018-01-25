class GitHubProjectPage {
  constructor() {
    this.licenseLabel = by.css('a[href*="LICENSE"]');
  }

  async getLicenseType() {
    const label = await element(this.licenseLabel);
    return label.getText();
  }
}

module.exports = GitHubProjectPage;
