import Board from '../Board';
import { Color } from '../enums/Color';
import Figure from '../Figure';
import Move from '../Move';
import Position from '../interfaces/Position';
import { FigureType } from '../enums/FiguteType';

const kingAvailableMovesCallback = (
  position?: Position,
  board?: Board
): Move[] => {
  if (!position) return [];
  const moves: Move[] = [];
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) continue;
      const newPosition = { x: position.x + i, y: position.y + j };
      if (
        newPosition.x < 0 ||
        newPosition.x > 7 ||
        newPosition.y < 0 ||
        newPosition.y > 7 ||
        (board &&
          board.getCell(newPosition)?.getFigure()?.color ===
            board.getPlayerColor())
      )
        continue;
      moves.push({
        from: position,
        to: newPosition,
      });
    }
  }
  return moves;
};

export default class King extends Figure {
  constructor(color: Color) {
    super(color, FigureType.KING, kingAvailableMovesCallback);
  }
}
