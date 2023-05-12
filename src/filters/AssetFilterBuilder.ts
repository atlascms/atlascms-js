import FilterBuilder from './FilterBuilder';
import { AssetFilter } from '../types/index';

export class AssetFilterBuilder extends FilterBuilder {
  private _folder?: string | null;
  private _page?: number | null;
  private _size?: number | null;
  private _search?: string;

  constructor() {
    super();
  }

  folder(value: string): this {
    if (value) {
      this._folder = value;
    }
    return this;
  }

  page(value: number): this {
    if (value) {
      this._page = value;
    }
    return this;
  }

  pageSize(value: number): this {
    if (value) {
      this._size = value;
    }
    return this;
  }

  search(value: string) {
    if (value) {
      this._search = value;
    }
    return this;
  }

  build(): AssetFilter {
    let result: AssetFilter = {};

    if (this._folder) result.folder = this._folder;
    if (this._page) result.page = this._page;
    if (this._size) result.size = this._size;
    if (this._search) result.search = this._search;

    let filters = super.toString();
    if (filters) result._filters = filters;

    return result;
  }

  toString(): string {
    let result = this.build();

    return Object.keys(result)
      .map((key) => key + '=' + result[key])
      .join('&');
  }
}

export const createAssetFilter = () => {
  return new AssetFilterBuilder();
};
