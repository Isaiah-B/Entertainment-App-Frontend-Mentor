import express from 'express';
import { addBookmarked, getUser } from '../controllers/user-controller';

const router = express.Router();

router.route('/:id')
  .get(getUser)  
  .patch(addBookmarked);

export default router;
