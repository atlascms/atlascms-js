import { default as FilterBuilder, convertFilterToQueryString } from './FilterBuilder';
import { ContentFilter } from '../types/index';

export class ContentFilterBuilder extends FilterBuilder {
  #locale?: string | null;
  #page?: number | null;
  #size?: number | null;
  #stage?: string | 'published' | 'unpublished' | 'all';
  #resolve?: string;
  #search?: string;

  constructor() {
    super();
  }

  locale(value: string): this {
    if (value) {
      this.#locale = value;
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

  stage(value: string | 'published' | 'unpublished' | 'all'): this {
    if (value) {
      this.#stage = value;
    }
    return this;
  }

  build(): ContentFilter {
    let result: ContentFilter = {};

    if (this.#locale) result.locale = this.#locale;
    if (this.#page) result.page = this.#page;
    if (this.#size) result.size = this.#size;
    if (this.#stage) result.stage = this.#stage;
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

export const createContentFilter = () => {
  return new ContentFilterBuilder();
};
