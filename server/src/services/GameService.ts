import Game from '../models/Game';
import MemCache from '../repository/MemCache';

const memCache = new MemCache();
export default class GameService {
  public async createGame(): Promise<Game> {
    const game = new Game();
    memCache.setItem(game.id, game);
    return game;
  }
}
