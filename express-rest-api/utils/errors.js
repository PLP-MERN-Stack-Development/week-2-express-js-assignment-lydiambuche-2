// utils/errors.js

// Not Found Error 
export class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotFoundError';
    this.statusCode = 404;
  }
}

// Validation Error (missing fields)
export class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
    this.statusCode = 400;
  }
}

// unathorization Error
export class UnauthorizedError extends Error {
  constructor(message){
  super(message)
  this.name = 'Unauthorized access'; 
  this.statusCode = 401;
  }
}
