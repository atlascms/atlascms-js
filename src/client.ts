import { AxiosInstance, AxiosRequestConfig } from 'axios';
import * as Services from './services/index';
import { createHttp } from './utils/index';
import { HttpGetParams, HttpPostParams, HttpPutParams, HttpDeleteParams, ClientSettings } from './types/index';

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

  get({ url, query = null, config = null }: HttpGetParams) {
    if (typeof query === 'string' || query instanceof String) {
      return this._http?.get(`${url}?${query}`, this.#createRequestConfig(config));
    } else {
      return this._http?.get(url, this.#createRequestConfig(config));
    }
  }

  post({ url, data = null, config = null }: HttpPostParams) {
    return this._http?.post(url, data, this.#createRequestConfig(config));
  }

  put({ url, data = null, config = null }: HttpPutParams) {
    return this._http?.put(url, data, this.#createRequestConfig(config));
  }

  delete({ url, query = null, config = null }: HttpGetParams) {
    if (query) {
      config = { ...config, params: query };
    }

    return this._http?.delete(url, this.#createRequestConfig(config));
  }

  #createRequestConfig(config?: AxiosRequestConfig<any>): AxiosRequestConfig<any> {
    if (!config) return null;

    return config;
  }
}

export function createClient(config: ClientSettings) {
  let client = new Client(config);
  return client;
}
