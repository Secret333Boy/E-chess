import Board from '../models/Board';
import { Color } from '../models/enums/Color';
import { FigureType } from '../models/enums/FiguteType';
import Figure from '../models/Figure';
import Position from '../models/interfaces/Position';
import equalsPosition from './equalsPosition';

export default (board: Board) => {
  const color =
    board.getPlayerColor() === Color.WHITE ? Color.BLACK : Color.WHITE;
  const grid = board.getGrid();
  const enemyFigures: Figure[] = [];
  let kingPosition: Position;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const figure = grid[i][j].getFigure();
      if (figure && figure.color !== color) {
        enemyFigures.push(figure);
      }

      if (
        figure?.type === FigureType.KING &&
        figure.color === color &&
        figure.cell
      ) {
        kingPosition = figure.cell.position;
      }
    }
  }

  for (let i = 0; i < enemyFigures.length; i++) {
    const enemyFigure = enemyFigures[i];
    const availableMoves = enemyFigure.unsafeAvailableMoves;

    if (availableMoves.some((move) => equalsPosition(move.to, kingPosition))) {
      return true;
    }
  }

  return false;
};
