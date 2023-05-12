import BaseService from './BaseService';
import { ClientSettings } from '../types';
import { createUrlBuilder, UrlBuilder } from '../utils/index';

export default class Accounts extends BaseService {
  login(username: string, password: string) {
    return this.client.executeRequest({
      method: 'POST',
      url: this._composeUrl(this.client.settings, 'login'),
      body: {
        username: username,
        password: password,
      },
    });
  }

  me() {
    return this.client.executeRequest({
      method: 'GET',
      url: this._composeUrl(this.client.settings, 'accounts/me'),
    });
  }

  private _composeUrl(config: ClientSettings, path: string = ''): string {
    var builder = createUrlBuilder(config.accountBaseUrl).addSegment(path);

    return builder.build();
  }
}
