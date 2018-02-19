let GitHubSite = require('../objects/GitHubSite');

describe('Some GitHub Project', () => {
  it('should have license defined', async () => {
    let github = new GitHubSite();
    let project = await github.openProject('alexeyraspopov/dataclass');
    let license = await project.getLicenseType();

    expect(license).toBe('MIT');
  });
});
