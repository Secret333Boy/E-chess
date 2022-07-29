import Board from './Board';
import { Color } from './Color';
import Figure from './Figure';
import Position from './Position';

export default class Cell {
  private figure: Figure | null = null;
  public readonly color: Color;
  public readonly position: Position;
  public readonly board: Board;
  public available = false;

  constructor(color: Color, position: Position, board: Board) {
    this.color = color;
    this.position = position;
    this.board = board;
  }

  public getFigure(): Figure | null {
    return this.figure;
  }

  public setFigure(figure: Figure | null) {
    if (this.figure) this.figure.cell = null;
    this.figure = figure;
    if (this.figure) this.figure.cell = this;
  }

  public toggleAvailable() {
    this.available = !this.available;
  }

  get isEmpty(): boolean {
    return !this.figure;
  }
}
