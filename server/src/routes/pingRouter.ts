import { Router as createRouter } from 'express';
import PingController from '../controllers/PingController';

const pingRouter = createRouter();
const pingController = new PingController();
pingRouter.get('/', pingController.ping);

export default pingRouter;
