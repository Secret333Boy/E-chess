import Board from './Board';
import Cell from './Cell';
import { Color } from './Color';
import Move from './Move';
import Position from './Position';

export enum FigureType {
  KING = 'king',
  QUEEN = 'queen',
  ROOK = 'rook',
  BISHOP = 'bishop',
  KNIGHT = 'knight',
  PAWN = 'pawn',
}

export default class Figure {
  public readonly color: Color;
  public readonly type: FigureType;
  public readonly spriteName: string;
  public cell: Cell | null = null;
  private availableMovesCallback: (
    position?: Position,
    board?: Board
  ) => Move[];

  constructor(
    color: Color,
    type: FigureType,
    availableMovesCallback: (position: Position | undefined) => Move[]
  ) {
    this.color = color;
    this.type = type;
    this.spriteName = type + (color === Color.BLACK ? '-d' : '') + '.svg';
    this.availableMovesCallback = availableMovesCallback;
  }

  get availableMoves() {
    return this.availableMovesCallback(this.cell?.position, this.cell?.board);
  }
}
