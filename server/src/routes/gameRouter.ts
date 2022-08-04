import { Router as createRouter } from 'express';
import GameController from '../controllers/GameController';

const gameRouter = createRouter();
const gameController = new GameController();

gameRouter.post('/', gameController.createGame);

export default gameRouter;
