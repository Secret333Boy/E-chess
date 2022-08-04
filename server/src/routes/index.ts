import { Router as createRouter } from 'express';
import gameRouter from './gameRouter';
import pingRouter from './pingRouter';

const router = createRouter();

router.use('/ping', pingRouter);
router.use('/game', gameRouter);

export default router;
