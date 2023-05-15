import { AxiosInstance } from 'axios';
import * as Services from './services/index';
import { createHttp } from './utils/index';
import { HttpRequestConfig, ClientSettings } from './types/index';

const defaultSettings: ClientSettings = {
  apiToken: '',
  projectId: '',
  projectBaseUrl: '#',
  accountBaseUrl: '#',
};

export class Client {
  settings: ClientSettings;
  contents: Services.Contents;
  models: Services.Models;
  mediaLibrary: Services.MediaLibrary;
  users: Services.Users;
  private _http?: AxiosInstance;

  constructor(settings: ClientSettings) {
    this.settings = { ...defaultSettings, ...settings };
    this.contents = new Services.Contents(this);
    this.models = new Services.Models(this);
    this.mediaLibrary = new Services.MediaLibrary(this);
    this.users = new Services.Users(this);
    this._http = createHttp(settings);
  }

  executeRequest(request: HttpRequestConfig) {
    if (request.method == 'GET') {
      if (typeof request.query === 'string' || request.query instanceof String) {
        return this._http?.get(`${request.url}?${request.query}`);
      } else {
        return this._http?.get(request.url, { params: request.query });
      }
    }

    if (request.method == 'POST') {
      return this._http?.post(request.url, request.body, { params: request.query });
    }

    if (request.method == 'PUT') {
      return this._http?.put(request.url, request.body, { params: request.query });
    }

    if (request.method == 'DELETE') {
      return this._http?.delete(request.url, { params: request.query });
    }
  }
}

export function createClient(config: ClientSettings) {
  let client = new Client(config);
  return client;
}
