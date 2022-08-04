import Board from '../Board';
import { Color } from '../enums/Color';
import Figure from '../Figure';
import Move from '../Move';
import Position from '../interfaces/Position';
import { FigureType } from '../enums/FiguteType';

const pawnAvailableMovesCallback =
  (down: boolean, isFirstMove: boolean) =>
  (position: Position | undefined, board?: Board): Move[] => {
    if (!position) return [];
    const moves: Move[] = [];
    const initialNewPosition: Position = {
      x: position.x + (down ? 1 : -1),
      y: position.y,
    };
    const newPositions: Position[] = [];
    if (board?.getCell(initialNewPosition)?.isEmpty) {
      newPositions.push(initialNewPosition);
      const additionalPosition: Position = {
        x: position.x + (down ? 2 : -2),
        y: position.y,
      };
      if (isFirstMove && board?.getCell(additionalPosition)?.isEmpty) {
        newPositions.push(additionalPosition);
      }
    }

    const possibleEnemyPositions: Position[] = [
      { x: initialNewPosition.x, y: initialNewPosition.y + 1 },
      { x: initialNewPosition.x, y: initialNewPosition.y - 1 },
    ];

    possibleEnemyPositions.forEach((enemyPosition) => {
      if (
        !board?.getCell(enemyPosition)?.isEmpty &&
        board?.getCell(enemyPosition)?.getFigure()?.color !==
          board?.getPlayerColor()
      )
        newPositions.push(enemyPosition);
    });

    newPositions.forEach((newPosition) => {
      if (
        !(
          newPosition.x < 0 ||
          newPosition.x > 7 ||
          newPosition.y < 0 ||
          newPosition.y > 7
        )
      ) {
        moves.push({
          from: position,
          to: newPosition,
        });
      }
    });

    return moves;
  };

export default class Pawn extends Figure {
  private down: boolean;
  constructor(color: Color, isFirstMove: boolean, down = false) {
    super(
      color,
      FigureType.PAWN,
      pawnAvailableMovesCallback(down, isFirstMove)
    );
    this.down = down;
  }

  public updateFirstMove() {
    return new Pawn(this.color, false, this.down);
  }

  public static isPawn(obj: unknown) {
    return obj instanceof Pawn;
  }
}
