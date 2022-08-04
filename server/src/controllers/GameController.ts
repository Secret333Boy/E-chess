import { Request, Response } from 'express';
import GameService from '../services/GameService';

const gameService = new GameService();
export default class GameController {
  public async createGame(_req: Request, res: Response): Promise<void> {
    res.json(await gameService.createGame());
  }
}
