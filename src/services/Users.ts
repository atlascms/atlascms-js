import BaseService from './BaseService';
import { convertFilterToQueryString } from '../filters';
import { ClientSettings } from '../types/index';

export default class Users extends BaseService {
  count(filters?: any) {
    // return this.client.executeRequest({
    //   method: 'GET',
    //   url: this.#composeUrl(this.client.settings, 'count'),
    //   query: this.#getQueryFilters(filters),
    // });
    return null;
  }

  creteRole(data: object) {
    // return this.client.executeRequest({
    //   method: 'GET',
    //   url: this.#composeUrl(this.client.settings, 'count'),
    //   query: this.#getQueryFilters(filters),
    // });
    return null;
  }

  changePassword(id: string, newPassword: string) {
    // return this.client.executeRequest({
    //   method: 'GET',
    //   url: this.#composeUrl(this.client.settings, 'count'),
    //   query: this.#getQueryFilters(filters),
    // });
    return null;
  }

  deleteRole(id: string) {
    // return this.client.executeRequest({
    //   method: 'DELETE',
    //   url: this.#composeUrl(this.client.settings, model, id),
    // });
    return null;
  }

  deleteUser(id: string) {
    // return this.client.executeRequest({
    //   method: 'DELETE',
    //   url: this.#composeUrl(this.client.settings, model, id),
    // });
    return null;
  }

  getRoles() {
    // return this.client.executeRequest({
    //   method: 'GET',
    //   url: this.#composeUrl(this.client.settings, model),
    //   query: this.#getQueryFilters(filters),
    // });
    return null;
  }

  getPermissionsSet() {
    // return this.client.executeRequest({
    //   method: 'GET',
    //   url: this.#composeUrl(this.client.settings, model),
    //   query: this.#getQueryFilters(filters),
    // });
    return null;
  }

  getUsers(filters?: any) {
    // return this.client.executeRequest({
    //   method: 'GET',
    //   url: this.#composeUrl(this.client.settings, model),
    //   query: this.#getQueryFilters(filters),
    // });
    return null;
  }

  getUser(id: string) {
    // return this.client.executeRequest({
    //   method: 'GET',
    //   url: this.#composeUrl(this.client.settings, model, id),
    // });

    return null;
  }

  loginUser(id: string) {
    // return this.client.executeRequest({
    //   method: 'GET',
    //   url: this.#composeUrl(this.client.settings, model, id),
    // });

    return null;
  }

  registerUser(data: object) {
    // return this.client.executeRequest({
    //   method: 'POST',
    //   url: this.#composeUrl(this.client.settings, model),
    //   body: data,
    // });

    return null;
  }

  updateUser(id: string, data: object) {
    // return this.client.executeRequest({
    //   method: 'PUT',
    //   url: this.#composeUrl(this.client.settings, model, id),
    //   body: data,
    // });
    return null;
  }

  updateRole(id: string, data: object) {
    // return this.client.executeRequest({
    //   method: 'PUT',
    //   url: this.#composeUrl(this.client.settings, model, id),
    //   body: data,
    // });
    return null;
  }

  #getQueryFilters(filters?: any): string {
    if (typeof filters === 'string') return filters;
    else if (typeof filters === 'object') return convertFilterToQueryString(filters);
  }

  #composeUrl(config: ClientSettings, path: string = ''): string {
    var builder = this.getProjectUrlBuilder(config).addSegment('users').addSegment(path);

    return builder.build();
  }
}
