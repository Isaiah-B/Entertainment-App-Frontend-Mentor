import { Request, Response, NextFunction } from 'express';

type WrappedFunction = (
  req: Request,
  res: Response,
  next: NextFunction,
) => any;

export default (fn: WrappedFunction) => (req: Request, res: Response, next: NextFunction) => {
  return fn(req, res, next).catch(next);
};