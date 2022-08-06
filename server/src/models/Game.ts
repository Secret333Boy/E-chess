import crypto from 'crypto';
import ws from 'ws';

export default class Game {
  private static INITIAL_STATE =
    'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w';
  public readonly id: string;
  public state: string;
  private createdAt: Date;
  private updatedAt: Date;
  public playerWhite?: ws.WebSocket;
  public playerBlack?: ws.WebSocket;
  private activeWhite = true;

  constructor(state?: string) {
    this.id = crypto.randomUUID();
    this.state = state || Game.INITIAL_STATE;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  public toggleActivePlayer() {
    this.activeWhite = !this.activeWhite;
  }

  get ready() {
    return !!(this.playerWhite && this.playerBlack);
  }

  get activePlayer() {
    return this.activeWhite ? this.playerWhite : this.playerBlack;
  }
}
