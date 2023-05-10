import { ModelFilter } from '../types/index';

export class ModelFilterBuilder {
  private _system?: boolean | null;
  private _page?: number | null;
  private _size?: number | null;

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

  system(value: boolean): this {
    if (value) {
      this._system = value;
    }
    return this;
  }

  build(): ModelFilter {
    let result: ModelFilter = {};

    if (this._system) result.system = this._system;
    if (this._page) result.page = this._page;
    if (this._size) result.size = this._size;

    return result;
  }

  toString(): string {
    let result = this.build();

    return Object.keys(result)
      .map((key) => key + '=' + result[key])
      .join('&');
  }
}

export const createModelFilter = () => {
  return new ModelFilterBuilder();
};
