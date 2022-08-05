import Game from '../models/Game';
import MemCache from '../repository/MemCache';

export default class GameService {
  private readonly memCache = new MemCache<Game>();
  public async createGame(): Promise<Game> {
    const game = new Game();
    this.memCache.setItem(game.id, game);
    return game;
  }

  public async getAllGames(): Promise<Game[]> {
    return this.memCache.getAllItems();
  }

  public async getGame(id: string): Promise<Game | undefined> {
    return this.memCache.getItem(id);
  }

  public async removeGame(id: string): Promise<void> {
    this.memCache.removeItem(id);
  }
}
