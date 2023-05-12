import BaseService from './BaseService';
import { ClientSettings } from '../types';
import { ModelFilter } from '../types/index';

export default class Models extends BaseService {
  createModel(data: object) {
    return this.client.executeRequest({
      method: 'POST',
      url: this._composeUrl(this.client.settings, `models`),
      body: data,
    });
  }

  createComponent(data: object) {
    return this.client.executeRequest({
      method: 'POST',
      url: this._composeUrl(this.client.settings, `components`),
      body: data,
    });
  }

  deleteModel(id: string) {
    return this.client.executeRequest({
      method: 'DELETE',
      url: this._composeUrl(this.client.settings, `models/${id}`),
    });
  }

  deleteComponent(id: string) {
    return this.client.executeRequest({
      method: 'DELETE',
      url: this._composeUrl(this.client.settings, `components/${id}`),
    });
  }

  getModels(filters?: ModelFilter) {
    return this.client.executeRequest({
      method: 'GET',
      url: this._composeUrl(this.client.settings, 'models'),
      query: filters,
    });
  }

  getComponents() {
    return this.client.executeRequest({
      method: 'GET',
      url: this._composeUrl(this.client.settings, 'components'),
    });
  }

  getModel(id: string) {
    return this.client.executeRequest({
      method: 'GET',
      url: this._composeUrl(this.client.settings, `models/${id}`),
    });
  }

  getComponent(id: string) {
    return this.client.executeRequest({
      method: 'GET',
      url: this._composeUrl(this.client.settings, `components/${id}`),
    });
  }

  updateModel(id: string, data: object) {
    return this.client.executeRequest({
      method: 'PUT',
      url: this._composeUrl(this.client.settings, `models/${id}`),
      body: data,
    });
  }

  updateComponent(id: string, data: object) {
    return this.client.executeRequest({
      method: 'PUT',
      url: this._composeUrl(this.client.settings, `components/${id}`),
      body: data,
    });
  }

  private _composeUrl(config: ClientSettings, path: string = ''): string {
    var builder = this.getProjectUrlBuilder(config).addSegment('content-types').addSegment(path);

    return builder.build();
  }
}
