import Board from '../Board';
import { Color } from '../Color';
import Figure, { FigureType } from '../Figure';
import Move from '../Move';
import Position from '../Position';

const pawnAvailableMovesCallback =
  (down: boolean, isFirstMove: boolean) =>
  (position: Position | undefined, board?: Board): Move[] => {
    if (!position) return [];
    const moves: Move[] = [];
    if (isFirstMove)
      moves.push(
        new Move(position, { x: position.x + (down ? 2 : -2), y: position.y })
      );
    const newPosition: Position = {
      x: position.x + (down ? 1 : -1),
      y: position.y,
    };
    if (
      !(
        newPosition.x < 0 ||
        newPosition.x > 7 ||
        newPosition.y < 0 ||
        newPosition.y > 7 ||
        (board &&
          board.getCell(newPosition).getFigure()?.color ===
            board.getPlayerColor())
      )
    )
      moves.push({
        from: position,
        to: newPosition,
      });
    return moves;
  };

export default class Pawn extends Figure {
  constructor(color: Color, isFirstMove: boolean, down = false) {
    super(
      color,
      FigureType.PAWN,
      pawnAvailableMovesCallback(down, isFirstMove)
    );
  }
}
