import { Router } from 'express';
import { getAll } from '../controllers/item-controller';

const router = Router();

router.route('/').get(getAll);

export default router;
