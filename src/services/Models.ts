import BaseService from './BaseService';
import { ClientSettings } from '../types';
import { ModelFilter } from '../types/index';

export default class Models extends BaseService {
  createModel(data: object) {
    return this.client.post({
      url: this._composeUrl(this.client.settings, `models`),
      data: data,
    });
  }

  createComponent(data: object) {
    return this.client.post({
      url: this._composeUrl(this.client.settings, `components`),
      data: data,
    });
  }

  deleteModel(id: string) {
    return this.client.delete({
      url: this._composeUrl(this.client.settings, `models/${id}`),
    });
  }

  deleteComponent(id: string) {
    return this.client.delete({
      url: this._composeUrl(this.client.settings, `components/${id}`),
    });
  }

  getModels(filters?: ModelFilter) {
    return this.client.get({
      url: this._composeUrl(this.client.settings, 'models'),
      query: filters,
    });
  }

  getComponents() {
    return this.client.get({
      url: this._composeUrl(this.client.settings, 'components'),
    });
  }

  getModel(id: string) {
    return this.client.get({
      url: this._composeUrl(this.client.settings, `models/${id}`),
    });
  }

  getComponent(id: string) {
    return this.client.get({
      url: this._composeUrl(this.client.settings, `components/${id}`),
    });
  }

  updateModel(id: string, data: object) {
    return this.client.put({
      url: this._composeUrl(this.client.settings, `models/${id}`),
      data: data,
    });
  }

  updateComponent(id: string, data: object) {
    return this.client.put({
      url: this._composeUrl(this.client.settings, `components/${id}`),
      data: data,
    });
  }

  private _composeUrl(config: ClientSettings, path: string = ''): string {
    var builder = this.getProjectUrlBuilder(config).addSegment('content-types').addSegment(path);

    return builder.build();
  }
}
