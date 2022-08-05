import { Router as createRouter } from 'express';
import pingRouter from './pingRouter';

const router = createRouter();

router.use('/ping', pingRouter);

export default router;
