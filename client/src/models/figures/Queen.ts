import getPossibleDiagonalPositions from '../../utils/getPossibleDiagonalPositions';
import getPossibleLinearPositions from '../../utils/getPossibleLinearPositions';
import Board from '../Board';
import { Color } from '../enums/Color';
import Figure from '../Figure';
import Move from '../Move';
import Position from '../interfaces/Position';
import { FigureType } from '../enums/FiguteType';

const queenAvailableMovesCallback = (
  position?: Position,
  board?: Board
): Move[] => {
  if (!position) return [];
  const moves: Move[] = [];
  getPossibleDiagonalPositions(position, board)
    .concat(getPossibleLinearPositions(position, board))
    .forEach((newPosition) => {
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

export default class Queen extends Figure {
  constructor(color: Color) {
    super(color, FigureType.QUEEN, queenAvailableMovesCallback);
  }
}
