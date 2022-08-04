import crypto from 'crypto';

export default class Game {
  private static INITIAL_STATE =
    'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w';
  public readonly id: string;
  private state: string;
  private createdAt: Date;
  private updatedAt: Date;

  constructor(state?: string) {
    this.id = crypto.randomUUID();
    this.state = state || Game.INITIAL_STATE;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
