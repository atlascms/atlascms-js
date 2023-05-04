export class UrlBuilder {
  private _urlParts: Array<string>;

  constructor(baseUrl?: string | '') {
    this._urlParts = new Array<string>();
    this._urlParts.push(baseUrl ?? '');
  }

  addSegment(segments: string): this {
    if (segments) {
      const parts = segments.split('/');

      parts.forEach((s) => {
        if (s) {
          this._urlParts.push(s);
        }
      });
    }
    return this;
  }

  build(): string {
    if (this._urlParts.length > 0) {
      return this._urlParts.join('/');
    }

    return '';
  }
}

export const createUrlBuilder = (baseUrl?: string | '') => {
  return new UrlBuilder(baseUrl);
};
