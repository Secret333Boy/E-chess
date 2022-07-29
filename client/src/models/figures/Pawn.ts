import { Color } from '../Color';
import Figure, { FigureType } from '../Figure';
import Move from '../Move';
import Position from '../Position';

const pawnAvailableMovesCallback =
  (down: boolean) =>
  (position: Position | undefined): Move[] => {
    if (!position) return [];
    const moves: Move[] = [];
    const newPosition: Position = {
      x: position.x + (down ? 1 : -1),
      y: position.y,
    };
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
    return moves;
  };

export default class Pawn extends Figure {
  constructor(color: Color, down = false) {
    super(color, FigureType.PAWN, pawnAvailableMovesCallback(down));
  }
}
