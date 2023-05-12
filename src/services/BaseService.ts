import { createUrlBuilder, UrlBuilder } from '../utils/index';
import { ClientSettings } from '../types';
import { Client } from '../client';

export default class BaseService {
  protected client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  composeUrl(config: ClientSettings, model: string, path: string = ''): string {
    return createUrlBuilder(config.projectBaseUrl)
      .addSegment(config.projectId)
      .addSegment('contents')
      .addSegment(model)
      .addSegment(path)
      .build();
  }

  getProjectUrlBuilder(config: ClientSettings): UrlBuilder {
    return createUrlBuilder(config.projectBaseUrl).addSegment(config.projectId);
  }
}
