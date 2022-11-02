import { Request, Response, NextFunction } from 'express';
import AppError from '../utils/appError';

const handleUserValidationError = (err: any) => {
  const errors = Object.values(err.errors).map((e: any) => {
    if (e.message.startsWith('Path `email` is invalid')) return 'Email is invalid';
    if (e.message.startsWith('Passwords do not match')) return e.message;
  });
  
  const message = errors.join('. ');
  return new AppError(message, 400);
};

const handleDuplicateKeyError = (err: any) => {
  const value = Object.keys(err.keyValue)[0];
  return new AppError(`A user with this ${value} already exists.`, 409);
};

const sendErrorDev = (err: any, req: Request, res: Response) => {
  return res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err: any, req: Request, res: Response) => {
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    return res.status(err.status).json({
      message: 'Oops! Something went wrong...'
    });
  }
};

export default (err: any, req: Request, res: Response, next: NextFunction) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  let error = { ...err, message: err.message };
  console.log(error);

  // if (err.name === 'ValidationError') {
  //   error = handleValidationError(error);    
  // }
  if (err._message === 'User validation failed') {
    error = handleUserValidationError(error);
  }
  if (err.code === 11000) {
    error = handleDuplicateKeyError(error);
  }

  if(process.env.NODE_ENV === 'development') {
    sendErrorDev(error, req, res);
  } else if (process.env.NODE_ENV === 'production') {
    sendErrorProd(error, req, res);
  }
};

