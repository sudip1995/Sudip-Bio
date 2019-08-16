// @dynamic
import {environment} from '../../../../environments/environment';

export class ProfileConfig {

  static get rootApi(): string {
    return environment.sudip_bio_api;
  }

  static get getAllBlogsApi(): string {
    return `${ProfileConfig.rootApi}/blog`;
  }

  static get postBlogApi(): string {
    return `${ProfileConfig.rootApi}/blog/write`;
  }
}
