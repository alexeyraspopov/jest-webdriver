const { URL } = require('url');
const GitHubProjectPage = require('./GitHubProjectPage');

class GitHubSite {
  constructor() {
    this.url = 'https://github.com';
  }

  async openProject(projectPath) {
    const url = new URL(projectPath, this.url);
    await browser.get(url);
    return new GitHubProjectPage();
  }
}

module.exports = GitHubSite;
