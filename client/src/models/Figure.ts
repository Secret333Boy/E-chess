import Board from './Board';
import Cell from './Cell';
import { Color } from './enums/Color';
import Move from './Move';
import Position from './interfaces/Position';
import { FigureType } from './enums/FiguteType';
import isMate from '../utils/isMate';

export default class Figure {
  public readonly color: Color;
  public readonly type: FigureType;
  public readonly spriteName: string;
  public readonly figureCode: string;
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
    const lowerFigureCode = type === FigureType.KNIGHT ? 'n' : type[0];
    this.figureCode =
      color === Color.WHITE ? lowerFigureCode.toUpperCase() : lowerFigureCode;
    this.availableMovesCallback = availableMovesCallback;
  }

  get unsafeAvailableMoves() {
    return this.availableMovesCallback(this.cell?.position, this.cell?.board);
  }

  get availableMoves() {
    return this.unsafeAvailableMoves.filter((move) => {
      const board = this.cell?.board;
      if (!board) return false;
      const backMove = new Move(move.to, move.from);
      board.applyUnsafeMove(move);
      const res = !isMate(board);
      board.applyUnsafeMove(backMove);
      return res;
    });
  }

  public static isFigure(obj: unknown) {
    return obj instanceof Figure;
  }
}
