import Board from './Board';
import Cell from './Cell';
import { Color } from './enums/Color';
import Move from './Move';
import Position from './interfaces/Position';
import { FigureType } from './enums/FiguteType';

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

  get availableMoves() {
    return this.availableMovesCallback(this.cell?.position, this.cell?.board);
  }

  public static isFigure(obj: unknown) {
    return obj instanceof Figure;
  }
}
