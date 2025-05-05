class ApiResponse {
  statusCode: number;
  message: string;
  customErrorCode?: number;
  success: boolean;
  constructor(statusCode: number, message: string, customErrorCode?: number) {
    this.statusCode = statusCode;
    this.message = message;
    this.success = statusCode < 400;
    this.customErrorCode = customErrorCode;
  }
}

export { ApiResponse };
