export type HttpRequestConfig = {
  method: 'GET' | 'PUT' | 'POST' | 'DELETE';
  url: string;
  query?: any;
  body?: any;
  token?: string;
};
