import Board from '../Board';
import { Color } from '../Color';
import Figure, { FigureType } from '../Figure';
import Move from '../Move';
import Position from '../Position';

const knightAvailableMovesCallback = (
  position?: Position,
  board?: Board
): Move[] => {
  if (!position) return [];
  const moves: Move[] = [];
  const newPositions: Position[] = [
    { x: position.x + 1, y: position.y + 2 },
    { x: position.x + 1, y: position.y - 2 },
    { x: position.x - 1, y: position.y + 2 },
    { x: position.x - 1, y: position.y - 2 },
    { x: position.x + 2, y: position.y + 1 },
    { x: position.x + 2, y: position.y - 1 },
    { x: position.x - 2, y: position.y + 1 },
    { x: position.x - 2, y: position.y - 1 },
  ];
  newPositions.map((newPosition) => {
    if (
      !(
        newPosition.x < 0 ||
        newPosition.x > 7 ||
        newPosition.y < 0 ||
        newPosition.y > 7 ||
        (board &&
          board.getCell(newPosition)?.getFigure()?.color ===
            board.getPlayerColor())
      )
    )
      moves.push({
        from: position,
        to: newPosition,
      });
  });
  return moves;
};

export default class Knight extends Figure {
  constructor(color: Color) {
    super(color, FigureType.KNIGHT, knightAvailableMovesCallback);
  }
}
