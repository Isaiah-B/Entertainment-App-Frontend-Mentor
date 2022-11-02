import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';

import User from '../models/user-model';

import catchAsync from '../utils/catchAsync';
import AppError from '../utils/appError';

export const signUp = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const newUser = await User.create(req.body);

  return res.status(201).json({
    status: 'success',
    data: {
        id: newUser._id, 
        bookmarked: newUser.bookmarked,
      },
  });
});


export const login = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError('Email or password not provided.', 400));
  }

  const user = await User.findOne({ email }).select('+password');

  const passwordMatch = user && await bcrypt.compare(password, user.password);

  if (!user || !passwordMatch) {
    return next(new AppError('User with this email and password could not be found.', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
        id: user._id,
        bookmarked: user.bookmarked
      }
  });
});