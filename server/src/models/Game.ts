import crypto from 'crypto';
import ws from 'ws';

export default class Game {
  private static INITIAL_STATE =
    'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w';
  public readonly id: string;
  private state: string;
  private createdAt: Date;
  private updatedAt: Date;
  public playerWhite?: ws.WebSocket;
  public playerBlack?: ws.WebSocket;

  constructor(state?: string) {
    this.id = crypto.randomUUID();
    this.state = state || Game.INITIAL_STATE;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  get ready() {
    return !!(this.playerWhite && this.playerBlack);
  }
}
