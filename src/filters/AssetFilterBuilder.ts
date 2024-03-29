import { default as FilterBuilder, convertFilterToQueryString } from './FilterBuilder';
import { AssetFilter } from '../types/index';

export class AssetFilterBuilder extends FilterBuilder {
  #folder?: string | null;
  #page?: number | null;
  #size?: number | null;
  #search?: string;
  #sort?: string;

  constructor() {
    super();
  }

  folder(value: string): this {
    if (value) {
      this.#folder = value;
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

  search(value: string) {
    if (value) {
      this.#search = value;
    }
    return this;
  }

  build(): AssetFilter {
    let result: AssetFilter = {};

    if (this.#folder) result.folder = this.#folder;
    if (this.#page) result.page = this.#page;
    if (this.#size) result.size = this.#size;
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

export const createAssetFilter = () => {
  return new AssetFilterBuilder();
};
