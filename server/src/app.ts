import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import authRouter from './routes/auth-routes';
import itemRouter from './routes/item-routes';
import userRouter from './routes/user-routes';

import AppError from './utils/appError';
import globalErrorHandler from './controllers/error-controller';

const app = express();

app.use(morgan('dev'));
app.use(cors());

app.use(express.json());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/items', itemRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (req: Request, res: Response, next: NextFunction) => {
  return next(new AppError(`The route ${req.originalUrl} was not found on the server!`, 404));
});

app.use(globalErrorHandler);

export default app;