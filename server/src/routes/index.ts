import { Router as createRouter } from 'express';
import pingRouter from './ping';

const router = createRouter();

router.use('/ping', pingRouter);

export default router;
