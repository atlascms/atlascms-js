import { AxiosInstance, AxiosRequestConfig } from 'axios';
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
        return this._http?.get(`${request.url}?${request.query}`, this.#createRequestConfig(request));
      } else {
        return this._http?.get(request.url, this.#createRequestConfig(request));
      }
    }

    if (request.method == 'POST') {
      return this._http?.post(request.url, request.body, this.#createRequestConfig(request));
    }

    if (request.method == 'PUT') {
      return this._http?.put(request.url, request.body, this.#createRequestConfig(request));
    }

    if (request.method == 'DELETE') {
      return this._http?.delete(request.url, this.#createRequestConfig(request));
    }
  }

  #createRequestConfig(request: HttpRequestConfig): AxiosRequestConfig<any> {
    let config: AxiosRequestConfig<any> = {};

    if (typeof request.query !== 'string' && !(request.query instanceof String)) {
      config.params = request.query;
    }

    if (request.additionalHeaders) {
      config.headers = { ...config.headers, ...request.additionalHeaders };
    }

    if (request.token) {
      config.headers['Authorization'] = `Bearer ${request.token}`;
    } else {
      if (this.settings.apiToken) {
        config.headers['Authorization'] = `Bearer ${this.settings.apiToken}`;
      }
    }

    return config;
  }
}

export function createClient(config: ClientSettings) {
  let client = new Client(config);
  return client;
}
