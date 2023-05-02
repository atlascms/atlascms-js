import { ClientSettings } from './client-settings';
import { BuildClient } from './client';

export const Client1 = (config: ClientSettings) => {
  return BuildClient(config);
};

console.log(Client1({ apiToken: 'mytoken' }));
