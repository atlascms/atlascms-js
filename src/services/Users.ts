import BaseService from './BaseService';
import { convertFilterToQueryString } from '../filters';
import { ClientSettings } from '../types/index';

export default class Users extends BaseService {
  count(filters?: any) {
    return this.client.get({
      url: this.#composeUrl(this.client.settings, 'count'),
      query: this.#getQueryFilters(filters),
    });
  }

  creteRole(data: object) {
    return this.client.post({
      url: this.#composeUrl(this.client.settings, 'roles'),
      data: data,
    });
  }

  changePassword(id: string, newPassword: string) {
    return this.client.post({
      url: this.#composeUrl(this.client.settings, `${id}`),
      data: {
        password: newPassword,
      },
    });
  }

  deleteRole(id: string) {
    return this.client.delete({
      url: this.#composeUrl(this.client.settings, `roles/${id}`),
    });
  }

  deleteUser(id: string) {
    return this.client.delete({
      url: this.#composeUrl(this.client.settings, `${id}`),
    });
  }

  getRoles() {
    return this.client.get({
      url: this.#composeUrl(this.client.settings, `roles`),
    });
  }

  getPermissionsSet() {
    return this.client.get({
      url: this.#composeUrl(this.client.settings, `roles/permissions`),
    });
  }

  getUsers(filters?: any) {
    return this.client.get({
      url: this.#composeUrl(this.client.settings),
      query: this.#getQueryFilters(filters),
    });
  }

  getUser(id: string) {
    return this.client.get({
      url: this.#composeUrl(this.client.settings, `${id}`),
    });
  }

  loginUser(username: string, password: string) {
    return this.client.post({
      url: this.#composeUrl(this.client.settings, `login`),
      data: {
        username: username,
        password: password,
      },
    });
  }

  registerUser(data: object) {
    return this.client.post({
      url: this.#composeUrl(this.client.settings),
      data: data,
    });
  }

  updateUser(id: string, data: object) {
    return this.client.put({
      url: this.#composeUrl(this.client.settings, `${id}`),
      data: data,
    });
  }

  updateRole(id: string, data: object) {
    return this.client.put({
      url: this.#composeUrl(this.client.settings, `roles/${id}`),
      data: data,
    });
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
