// @dynamic
export class ProfileConfig {

  static get rootApi(): string {
    return 'http://localhost:8626';
  }

  static get getAllBlogsApi(): string {
    return `${ProfileConfig.rootApi}/blog`;
  }

  static get postBlogApi(): string {
    return `${ProfileConfig.rootApi}/blog/write`;
  }
}
