export default class FilterBuilder {
  protected _filters: Array<string>;

  constructor() {
    this._filters = new Array<string>();
  }

  all(field: string, value: string): this {
    this.create(field, 'all', value);
    return this;
  }

  any(field: string, value: any): this {
    this.create(field, 'any', value);
    return this;
  }

  contains(field: string, value: string): this {
    this.create(field, 'contains', value);
    return this;
  }

  ends(field: string, value: string): this {
    this.create(field, 'ends', value);
    return this;
  }

  eq(field: string, value: string): this {
    this.create(field, 'eq', value);
    return this;
  }

  gt(field: string, value: string): this {
    this.create(field, 'gt', value);
    return this;
  }

  gte(field: string, value: string): this {
    this.create(field, 'gte', value);
    return this;
  }

  lt(field: string, value: string): this {
    this.create(field, 'lt', value);
    return this;
  }

  lte(field: string, value: string): this {
    this.create(field, 'lte', value);
    return this;
  }

  nany(field: string, value: string): this {
    this.create(field, 'nany', value);
    return this;
  }

  near(field: string, lng: number, lat: number, radius: number = 1000): this {
    this.create(field, 'near', `${lng}_${lat}_${radius}`);
    return this;
  }

  ncontains(field: string, value: string): this {
    this.create(field, 'ncontains', value);
    return this;
  }

  neq(field: string, value: string): this {
    this.create(field, 'neq', value);
    return this;
  }

  nstarts(field: string, value: string): this {
    this.create(field, 'nstarts', value);
    return this;
  }

  starts(field: string, value: string): this {
    this.create(field, 'starts', value);
    return this;
  }

  create(field: string, operator: string, value: any) {
    if (field && operator && value) {
      let argumentValue = '';
      if (Array.isArray(value)) {
        argumentValue = value.join(',');
      } else {
        argumentValue = value;
      }

      this._filters.push(`filter[${field}][${operator}]=${argumentValue}`);
    }
  }

  toString(): string {
    if (this._filters.length > 0) {
      return this._filters.join('&');
    }
    return '';
  }
}

export const createFilter = () => {
  return new FilterBuilder();
};
