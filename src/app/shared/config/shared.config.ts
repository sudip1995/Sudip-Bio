// @dynamic
import {environment} from '../../../environments/environment';

export class SharedConfig {

  static get rootApi(): string {
    return environment.sudip_bio_api;
  }

  static get sendMailApi(): string {
    return `${SharedConfig.rootApi}/send`;
  }

  static getAllContentApi(contentType: string): string {
    return `${SharedConfig.rootApi}/content/getAllContentByContentType/${contentType}`;
  }

  static getContentByIdApi(id: string): string {
    return `${SharedConfig.rootApi}/content/getContentById/${id}`;
  }

  static get postContentApi(): string {
    return `${SharedConfig.rootApi}/content/write`;
  }
}
