import createRouter from 'express';
import PingController from '../controllers/PingController';

const router = createRouter();
const pingController = new PingController();
router.get('/', pingController.ping);

export default router;
