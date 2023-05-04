import { AxiosInstance } from 'axios';
import * as Services from './services/index';
import { createHttp } from './utils/index';
import { HttpRequestConfig, ClientSettings } from './types/index';

const defaultSettings: ClientSettings = {
  apiToken: '',
  projectId: '',
  projectBaseUrl: 'https://localhost:5001',
};

export class Client {
  settings: ClientSettings;
  contents: Services.Contents;
  models: Services.Models;
  private _http?: AxiosInstance;

  constructor(settings: ClientSettings) {
    this.settings = { ...defaultSettings, ...settings };
    this.contents = new Services.Contents(this);
    this.models = new Services.Models(this);
    this._http = createHttp(settings);
  }

  executeRequest(request: HttpRequestConfig) {
    if (request.method == 'GET') {
      return this._http?.get(request.url, { params: request.query });
    }

    if (request.method == 'POST') {
      return this._http?.post(request.url, request.body);
    }

    if (request.method == 'PUT') {
      return this._http?.put(request.url, request.body);
    }

    if (request.method == 'DELETE') {
      return this._http?.delete(request.url);
    }
  }
}

export function createClient(config: ClientSettings) {
  let client = new Client(config);
  return client;
}
