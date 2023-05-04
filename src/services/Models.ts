import BaseService from './BaseService';
import { createUrlBuilder } from '../utils/index';
import { ClientSettings } from '../types';
import { ContentFilter, PagedList } from '../types/index';

export default class Models extends BaseService {
  count(model: string, queryParams?: ContentFilter) {
    return this.client.executeRequest({
      method: 'GET',
      url: composeUrl(this.client.settings, model, 'count'),
      query: queryParams,
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
