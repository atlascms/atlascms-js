import BaseService from './BaseService';
import { createUrlBuilder } from '../utils/index';
import { ClientSettings } from '../types';
import { ContentFilter, PagedList } from '../types/index';

export default class Contents extends BaseService {
  count(model: string, queryParams?: ContentFilter) {
    return this.client.executeRequest({
      method: 'GET',
      url: composeUrl(this.client.settings, model, 'count'),
      query: queryParams,
    });
  }

  getContents(model: string, queryParams?: ContentFilter) {
    return this.client.executeRequest({
      method: 'GET',
      url: composeUrl(this.client.settings, model),
      query: queryParams,
    });
  }

  getContent(model: string, id: string) {
    return this.client.executeRequest({
      method: 'GET',
      url: composeUrl(this.client.settings, model, id),
    });
  }

  createContent(model: string, data: object) {
    return this.client.executeRequest({
      method: 'POST',
      url: composeUrl(this.client.settings, model),
      body: data,
    });
  }

  updateContent(model: string, id: string, data: object) {
    return this.client.executeRequest({
      method: 'PUT',
      url: composeUrl(this.client.settings, model, id),
      body: data,
    });
  }

  deleteContent(model: string, id: string) {
    return this.client.executeRequest({
      method: 'DELETE',
      url: composeUrl(this.client.settings, model, id),
    });
  }

  duplicate(model: string, id: string, locales: boolean) {
    return this.client.executeRequest({
      method: 'POST',
      url: composeUrl(this.client.settings, model, `${id}/duplicate`),
      body: {
        locales: locales,
      },
    });
  }

  createTranslation(model: string, id: string, locale: string) {
    return this.client.executeRequest({
      method: 'POST',
      url: composeUrl(this.client.settings, model, `${id}/create-translation`),
      body: {
        locale: locale,
      },
    });
  }

  publish(model: string, id: string) {
    return this.client.executeRequest({
      method: 'POST',
      url: composeUrl(this.client.settings, model, `${id}/publish`),
    });
  }

  unpublish(model: string, id: string) {
    return this.client.executeRequest({
      method: 'POST',
      url: composeUrl(this.client.settings, model, `${id}/unpublish`),
    });
  }
}

const composeUrl = (config: ClientSettings, model: string, path: string = ''): string => {
  return createUrlBuilder(config.projectBaseUrl)
    .addSegment(config.projectId)
    .addSegment('contents')
    .addSegment(model)
    .addSegment(path)
    .build();
};
