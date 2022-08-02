import getPossibleDiagonalPositions from '../../utils/getPossibleDiagonalPositions';
import Board from '../Board';
import { Color } from '../Color';
import Figure, { FigureType } from '../Figure';
import Move from '../Move';
import Position from '../Position';

const bishopAvailableMovesCallback = (
  position?: Position,
  board?: Board
): Move[] => {
  if (!position) return [];
  const moves: Move[] = [];

  getPossibleDiagonalPositions(position, board).forEach((newPosition) => {
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

export default class Bishop extends Figure {
  constructor(color: Color) {
    super(color, FigureType.BISHOP, bishopAvailableMovesCallback);
  }
}
