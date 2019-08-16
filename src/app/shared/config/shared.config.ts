// @dynamic
import {environment} from '../../../environments/environment';

export class SharedConfig {

  static get rootApi(): string {
    return environment.sudip_bio_api;
  }

  static get sendMailApi(): string {
    return `${SharedConfig.rootApi}/send`;
  }
}
