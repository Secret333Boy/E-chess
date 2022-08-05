import { NextFunction, Request, Response } from 'express';
import ErrorResponse from '../models/interfaces/ErrorRespone';

export default async (
  err: Error,
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  if (!(err instanceof Error)) {
    next();
  }

  const statusCode = 500;
  const errors = [err];
  const message = 'Unexpected error';

  if (statusCode === 500) console.error(err);
  const errorResonse: ErrorResponse = { message, errors };
  res.status(statusCode).json(errorResonse);
};
