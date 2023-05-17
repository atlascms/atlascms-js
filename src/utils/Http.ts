import axios from 'axios';
import { AxiosInstance } from 'axios';
import { ApiException, ClientSettings } from '../types';

export function createHttp(config: ClientSettings) {
  _config = config;

  _instance = axios.create({
    timeout: 1000,
  });

  _instance.interceptors.request.use(onRequest, onError);
  _instance.interceptors.response.use(onResponse, onError);

  return _instance;
}

let _config: ClientSettings = null;
let _instance: AxiosInstance = null;

const onRequest = (request) => {
  const hasAuthHeader = !(request.headers?.Authorization === undefined || request.headers?.Authorization === null);

  if (!hasAuthHeader && _config.apiToken) {
    request.headers.Authorization = `Bearer ${_config.apiToken}`;
  }

  return request;
};

const onResponse = (response) => {
  return response.data;
};

const onError = (error) => {
  if (error.response) {
    return Promise.reject(createResponseException(error.response));
  }

  return Promise.reject(error);
};

const createResponseException = (response) => {
  let apiException: ApiException = {
    code: response?.data?.code,
    message: response?.data?.message,
    statusCode: response.status,
    // response: response,
  };

  switch (response.status) {
    case 401:
    case 403:
    case 404:
    case 429:
    case 500:
    case 502:
    case 503:
    case 504:
    case 422:
      apiException.errors = response.data.errors;
      break;
    default:
      break;
  }

  return apiException;
};
