import { Color } from '../Color';
import Figure, { FigureType } from '../Figure';
import Move from '../Move';
import Position from '../Position';

const rookAvailableMovesCallback = (position: Position | undefined): Move[] => {
  if (!position) return [];
  const moves: Move[] = [];
  for (let i = -7; i <= 7; i++) {
    if (i === 0) continue;
    const newPositions: Position[] = [
      { x: position.x + i, y: position.y },
      { x: position.x, y: position.y + i },
    ];

    newPositions.map((newPosition) => {
      if (
        !(
          newPosition.x < 0 ||
          newPosition.x > 7 ||
          newPosition.y < 0 ||
          newPosition.y > 7
        )
      )
        moves.push({
          from: position,
          to: newPosition,
        });
    });
  }
  return moves;
};

export default class Rook extends Figure {
  constructor(color: Color) {
    super(color, FigureType.ROOK, rookAvailableMovesCallback);
  }
}
