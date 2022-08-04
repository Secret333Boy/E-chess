import getPossibleLinearPositions from '../../utils/getPossibleLinearPositions';
import Board from '../Board';
import { Color } from '../enums/Color';
import Figure from '../Figure';
import Move from '../Move';
import Position from '../interfaces/Position';
import { FigureType } from '../enums/FiguteType';

const rookAvailableMovesCallback = (
  position?: Position,
  board?: Board
): Move[] => {
  if (!position) return [];
  const moves: Move[] = [];

  getPossibleLinearPositions(position, board).forEach((newPosition) => {
    if (
      !(
        board &&
        board.getCell(newPosition)?.getFigure()?.color ===
          board.getPlayerColor()
      )
    )
      moves.push({
        from: position,
        to: newPosition,
      });
  });
  return moves;
};

export default class Rook extends Figure {
  constructor(color: Color) {
    super(color, FigureType.ROOK, rookAvailableMovesCallback);
  }
}
