import { Request, Response, NextFunction } from 'express';
import Item from '../models/item-model';
import catchAsync from '../utils/catchAsync';

export const getAll = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const items = await Item.find({});

  return res.status(200).json({
    status: 'success',
    results: items.length,
    data: items,
  });
});