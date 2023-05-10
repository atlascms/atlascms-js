import { Client } from '../client';

export default class BaseService {
  protected client: Client;

  constructor(client: Client) {
    this.client = client;
  }
}
