import { Client } from '../Client';

export default class BaseService {
  protected client: Client;

  constructor(client: Client) {
    this.client = client;
  }
}
