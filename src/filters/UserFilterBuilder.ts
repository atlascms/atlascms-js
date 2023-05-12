import { default as FilterBuilder, convertFilterToQueryString } from './FilterBuilder';
import { UserFilter } from '../types/index';

export class UserFilterBuilder extends FilterBuilder {
  #username?: string | null;
  #page?: number | null;
  #size?: number | null;
  #roleId?: string;
  #resolve?: string;
  #search?: string;

  constructor() {
    super();
  }

  username(value: string): this {
    if (value) {
      this.#username = value;
    }
    return this;
  }

  page(value: number): this {
    if (value) {
      this.#page = value;
    }
    return this;
  }

  pageSize(value: number): this {
    if (value) {
      this.#size = value;
    }
    return this;
  }

  resolve(value: string) {
    if (value) {
      this.#resolve = value;
    }
    return this;
  }

  search(value: string) {
    if (value) {
      this.#search = value;
    }
    return this;
  }

  roleId(value: string): this {
    if (value) {
      this.#roleId = value;
    }
    return this;
  }

  build(): UserFilter {
    let result: UserFilter = {};

    if (this.#username) result.username = this.#username;
    if (this.#page) result.page = this.#page;
    if (this.#size) result.size = this.#size;
    if (this.#roleId) result.roleId = this.#roleId;
    if (this.#resolve) result.resolve = this.#resolve;
    if (this.#search) result.search = this.#search;

    let filters = super.getFilters();
    if (filters) result.filters = filters;

    return result;
  }

  toString(): string {
    let obj = this.build();
    return convertFilterToQueryString(obj);
  }
}

export const createUserFilter = () => {
  return new UserFilterBuilder();
};
