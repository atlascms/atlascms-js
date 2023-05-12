import FilterBuilder from './FilterBuilder';
import { ContentFilter } from '../types/index';

export class ContentFilterBuilder extends FilterBuilder {
  private _locale?: string | null;
  private _page?: number | null;
  private _size?: number | null;
  private _stage?: string | 'published' | 'unpublished' | 'all';
  private _resolve?: string;
  private _search?: string;

  constructor() {
    super();
  }

  locale(value: string): this {
    if (value) {
      this._locale = value;
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

  resolve(value: string) {
    if (value) {
      this._resolve = value;
    }
    return this;
  }

  search(value: string) {
    if (value) {
      this._search = value;
    }
    return this;
  }

  stage(value: string | 'published' | 'unpublished' | 'all'): this {
    if (value) {
      this._stage = value;
    }
    return this;
  }

  build(): ContentFilter {
    let result: ContentFilter = {};

    if (this._locale) result.locale = this._locale;
    if (this._page) result.page = this._page;
    if (this._size) result.size = this._size;
    if (this._stage) result.stage = this._stage;
    if (this._resolve) result.resolve = this._resolve;
    if (this._search) result.search = this._search;

    let filters = super.toString();
    if (filters) result._filters = filters;

    return result;
  }
}

export const createContentFilter = () => {
  return new ContentFilterBuilder();
};
