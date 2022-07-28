import Position from './Position';

export default class Move {
  public from: Position;
  public to: Position;

  constructor(from: Position, to: Position) {
    this.from = from;
    this.to = to;
  }
}
