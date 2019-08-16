// @dynamic
export class SharedConfig {

  static get rootApi(): string {
    return 'http://localhost:8626';
  }

  static get sendMailApi(): string {
    return `${SharedConfig.rootApi}/send`;
  }
}
