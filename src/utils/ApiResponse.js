class apiResponse {
  constructor(statusCode, data, message = "SUCCESS") {
    z;
    (this.statusCode = statusCode),
      (this.data = data),
      (this.message = message);
    this.success = statusCode > 400;
  }
}
