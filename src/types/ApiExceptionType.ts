export class ApiException {
  code: string;
  statusCode: number;
  message: string;
  errors?: any;
  response?: any;
}
