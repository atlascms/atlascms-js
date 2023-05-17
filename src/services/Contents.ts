import BaseService from './BaseService';
import { convertFilterToQueryString } from '../filters';
import { ClientSettings } from '../types/index';

export default class Contents extends BaseService {
  count(model: string, filters?: any) {
    return this.client.get({
      url: this.#composeUrl(this.client.settings, model, 'count'),
      query: this.#getQueryFilters(filters),
    });
  }

  createContent(model: string, data: object) {
    return this.client.post({ url: this.#composeUrl(this.client.settings, model), data: data });
  }

  getContents(model: string, filters?: any) {
    return this.client.get({
      url: this.#composeUrl(this.client.settings, model),
      query: this.#getQueryFilters(filters),
    });
  }

  getContent(model: string, id: string) {
    return this.client.get({ url: this.#composeUrl(this.client.settings, model, id) });
  }

  updateContent(model: string, id: string, data: object) {
    return this.client.put({ url: this.#composeUrl(this.client.settings, model, id), data: data });
  }

  deleteContent(model: string, id: string) {
    return this.client.delete({ url: this.#composeUrl(this.client.settings, model, id) });
  }

  duplicate(model: string, id: string, locales: boolean) {
    return this.client.post({
      url: this.#composeUrl(this.client.settings, model, `${id}/duplicate`),
      data: {
        locales: locales,
      },
    });
  }

  createTranslation(model: string, id: string, locale: string) {
    return this.client.post({
      url: this.#composeUrl(this.client.settings, model, `${id}/create-translation`),
      data: {
        locale: locale,
      },
    });
  }

  publish(model: string, id: string) {
    return this.client.post({ url: this.#composeUrl(this.client.settings, model, `${id}/publish`) });
  }

  unpublish(model: string, id: string) {
    return this.client.post({ url: this.#composeUrl(this.client.settings, model, `${id}/unpublish`) });
  }

  #getQueryFilters(filters?: any): string {
    if (typeof filters === 'string') return filters;
    else if (typeof filters === 'object') return convertFilterToQueryString(filters);
  }

  #composeUrl(config: ClientSettings, model: string, path: string = ''): string {
    var builder = this.getProjectUrlBuilder(config).addSegment('contents').addSegment(model).addSegment(path);

    return builder.build();
  }
}
