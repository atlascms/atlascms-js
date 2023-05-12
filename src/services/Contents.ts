import BaseService from './BaseService';
import { ClientSettings } from '../types';
import { ContentFilter } from '../types/index';

export default class Contents extends BaseService {
  count(model: string, queryParams?: ContentFilter) {
    return this.client.executeRequest({
      method: 'GET',
      url: this._composeUrl(this.client.settings, model, 'count'),
      query: queryParams,
    });
  }

  createContent(model: string, data: object) {
    return this.client.executeRequest({
      method: 'POST',
      url: this._composeUrl(this.client.settings, model),
      body: data,
    });
  }

  getContents(model: string, queryParams?: ContentFilter) {
    return this.client.executeRequest({
      method: 'GET',
      url: this._composeUrl(this.client.settings, model),
      query: queryParams,
    });
  }

  getContent(model: string, id: string) {
    return this.client.executeRequest({
      method: 'GET',
      url: this._composeUrl(this.client.settings, model, id),
    });
  }

  updateContent(model: string, id: string, data: object) {
    return this.client.executeRequest({
      method: 'PUT',
      url: this._composeUrl(this.client.settings, model, id),
      body: data,
    });
  }

  deleteContent(model: string, id: string) {
    return this.client.executeRequest({
      method: 'DELETE',
      url: this._composeUrl(this.client.settings, model, id),
    });
  }

  duplicate(model: string, id: string, locales: boolean) {
    return this.client.executeRequest({
      method: 'POST',
      url: this._composeUrl(this.client.settings, model, `${id}/duplicate`),
      body: {
        locales: locales,
      },
    });
  }

  createTranslation(model: string, id: string, locale: string) {
    return this.client.executeRequest({
      method: 'POST',
      url: this._composeUrl(this.client.settings, model, `${id}/create-translation`),
      body: {
        locale: locale,
      },
    });
  }

  publish(model: string, id: string) {
    return this.client.executeRequest({
      method: 'POST',
      url: this._composeUrl(this.client.settings, model, `${id}/publish`),
    });
  }

  unpublish(model: string, id: string) {
    return this.client.executeRequest({
      method: 'POST',
      url: this._composeUrl(this.client.settings, model, `${id}/unpublish`),
    });
  }

  private _composeUrl(config: ClientSettings, model: string, path: string = ''): string {
    var builder = this.getProjectUrlBuilder(config).addSegment('contents').addSegment(model).addSegment(path);

    return builder.build();
  }
}
