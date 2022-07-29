import getPossibleLinearPositions from '../../utils/getPossibleLinearPositions';
import Board from '../Board';
import { Color } from '../Color';
import Figure, { FigureType } from '../Figure';
import Move from '../Move';
import Position from '../Position';

const rookAvailableMovesCallback = (
  position?: Position,
  board?: Board
): Move[] => {
  if (!position) return [];
  const moves: Move[] = [];

  getPossibleLinearPositions(position, board).map((newPosition) => {
    if (
      !(
        board &&
        board.getCell(newPosition).getFigure()?.color === board.getPlayerColor()
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
