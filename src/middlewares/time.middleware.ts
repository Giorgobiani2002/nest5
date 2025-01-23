import { NextFunction } from 'express';

export function timeMiddleWare(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.log('this is time middleware');
  next();
}
