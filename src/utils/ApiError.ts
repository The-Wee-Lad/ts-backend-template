class ApiError extends Error {
  statusCode: number;
  customErrorCode?: number;
  constructor(statusCode: number, message: string, customErrorCode?: number) {
    super(message);
    this.statusCode = statusCode;
    this.customErrorCode = customErrorCode;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
