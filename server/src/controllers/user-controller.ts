import { NextFunction, Request, Response } from 'express';

import User from '../models/user-model';

import AppError from '../utils/appError';
import catchAsync from '../utils/catchAsync';

export const getUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(new AppError('User could not be found', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      id: user._id,
      bookmarked: user.bookmarked
    }
  });
});

export const addBookmarked = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const user = await User.findById(req.params.id);

  const { itemId } = req.body;

  if (!user) {
    return next(new AppError('User could not be found', 404));
  }
    
  if (user.bookmarked.length === 1 && user.bookmarked.includes(itemId)) {
    user.bookmarked = [];
  }

  user.bookmarked = user.bookmarked.includes(itemId) 
    ? user.bookmarked.filter((id) => id !== itemId)
    : user.bookmarked.concat(itemId);

  await user.save({ validateBeforeSave: false });

  return res.status(200).json({
    status: 'success',
    data: {
      id: user._id,
      bookmarked: user.bookmarked,
    },
  });
});