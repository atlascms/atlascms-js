export default class FilterBuilder {
  #filters: object | null;

  constructor() {
    this.#filters = {};
  }

  all(field: string, value: string): this {
    this.#create(field, 'all', value);
    return this;
  }

  any(field: string, value: any): this {
    this.#create(field, 'any', value);
    return this;
  }

  contains(field: string, value: string): this {
    this.#create(field, 'contains', value);
    return this;
  }

  ends(field: string, value: string): this {
    this.#create(field, 'ends', value);
    return this;
  }

  eq(field: string, value: string): this {
    this.#create(field, 'eq', value);
    return this;
  }

  gt(field: string, value: string): this {
    this.#create(field, 'gt', value);
    return this;
  }

  gte(field: string, value: string): this {
    this.#create(field, 'gte', value);
    return this;
  }

  lt(field: string, value: string): this {
    this.#create(field, 'lt', value);
    return this;
  }

  lte(field: string, value: string): this {
    this.#create(field, 'lte', value);
    return this;
  }

  nany(field: string, value: string): this {
    this.#create(field, 'nany', value);
    return this;
  }

  near(field: string, lng: number, lat: number, radius: number = 1000): this {
    this.#create(field, 'near', `${lng}_${lat}_${radius}`);
    return this;
  }

  ncontains(field: string, value: string): this {
    this.#create(field, 'ncontains', value);
    return this;
  }

  neq(field: string, value: string): this {
    this.#create(field, 'neq', value);
    return this;
  }

  nstarts(field: string, value: string): this {
    this.#create(field, 'nstarts', value);
    return this;
  }

  starts(field: string, value: string): this {
    this.#create(field, 'starts', value);
    return this;
  }

  #create(field: string, operator: string, value: any) {
    if (field && operator && value) {
      let argumentValue = '';
      if (Array.isArray(value)) {
        argumentValue = value.join(',');
      } else {
        argumentValue = value;
      }

      this.#filters[field] = {};
      this.#filters[field][operator] = argumentValue;
    }
  }

  getFilters(): object {
    return this.#filters;
  }
  toString(): string {
    return this.toQueryString(this.#filters);
  }
  toQueryString(filters: object) {
    if (filters) {
      let result = [];
      for (const field in filters) {
        for (const operator in filters[field]) {
          result.push(`filter[${field}][${operator}]=${filters[field][operator]}`);
        }
      }

      if (result) {
        return result.join('&');
      }
    }
    return '';
  }
}

export const createFilter = () => {
  return new FilterBuilder();
};

export function convertFilterToQueryString(filter: object): string {
  if (filter) {
    return Object.keys(filter)
      .map((key) => {
        if (key == 'filters') {
          let result = [];
          for (const field in filter[key]) {
            for (const operator in filter[key][field]) {
              result.push(`filter[${field}][${operator}]=${filter[key][field][operator]}`);
            }
          }
          if (result) {
            return result.join('&');
          }
        }
        return key + '=' + filter[key];
      })
      .join('&');
  }

  return '';
}
