import { ClientSettings } from './client-settings';
export class Client {
  config: ClientSettings;

  constructor(config: ClientSettings) {
    this.config = config;
  }
}

export const BuildClient = (config: ClientSettings) => {
  return new Client(config);
};
