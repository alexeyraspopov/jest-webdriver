const GitHubSite = require('../objects/GitHubSite');

describe('Some GitHub Project', () => {
  it('should have license defined', async () => {
    const github = new GitHubSite();
    const project = await github.openProject('alexeyraspopov/dataclass');
    const license = await project.getLicenseType();

    expect(license).toBe('MIT');
  });
});
