export interface HttpGetParams {
  url: string;
  query?: string | object;
  config?: object;
}

export interface HttpPostParams {
  url: string;
  data?: object | null;
  config?: object;
}

export interface HttpPutParams {
  url: string;
  data?: object | null;
  config?: object;
}

export interface HttpDeleteParams {
  url: string;
  query?: string | object;
  config?: object;
}
