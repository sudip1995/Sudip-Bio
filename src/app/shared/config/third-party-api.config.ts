// @dynamic
export class ThirdPartyApiConfig {

  static get githubApi(): string {
    return 'https://api.github.com';
  }

  static getGithubUserReposApi(username: string): string {
    return `${ThirdPartyApiConfig.githubApi}/users/${username}/repos`;
  }
}
