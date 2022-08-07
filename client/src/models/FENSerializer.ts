import Cell from './Cell';
import { Color } from './enums/Color';
import Board from './Board';
import Pawn from './figures/Pawn';
import Knight from './figures/Knight';
import Bishop from './figures/Bishop';
import Rook from './figures/Rook';
import Queen from './figures/Queen';
import King from './figures/King';

const FENnumbers = '12345678';

export default class FENSerializer {
  public static serialize(grid: Cell[][], whiteTurn = true): string {
    const result: string[] = [];
    for (let i = 0; i < 8; i++) {
      let row = '';
      let c = 0;
      for (let j = 0; j < 8; j++) {
        const figure = grid[i][j].getFigure();
        if (figure) {
          if (c !== 0) {
            row += c;
            c = 0;
          }
          row += figure.figureCode;
        } else {
          c++;
        }
      }
      if (c !== 0) row += c;
      result.push(row);
    }
    return result.join('/') + ' ' + (whiteTurn ? 'w' : 'b');
  }

  public static deserialize(fen: string, board: Board): Cell[][] {
    for (let i = 0; i < fen.length; i++) {
      const char = fen[i];
      if (FENnumbers.includes(char)) {
        fen = fen.replace(char, '-'.repeat(+char));
      }
    }
    const grid: Cell[][] = [];
    const [code] = fen.split(' ');
    const rows = code.split('/');
    if (rows.length !== 8) {
      throw new Error('Invalid FEN');
    }
    for (let i = 0; i < 8; i++) {
      const row = rows[i];
      const cells: Cell[] = [];

      for (let j = 0; j < row.length; j++) {
        const char = row[j];
        const cell = new Cell(
          (i + j) % 2 ? Color.BLACK : Color.WHITE,
          { x: i, y: j },
          board
        );

        cells.push(cell);

        switch (char) {
          case 'P':
            cell.setFigure(new Pawn(Color.WHITE, i === 6, false));
            break;
          case 'N':
            cell.setFigure(new Knight(Color.WHITE));
            break;
          case 'B':
            cell.setFigure(new Bishop(Color.WHITE));
            break;
          case 'R':
            cell.setFigure(new Rook(Color.WHITE));
            break;
          case 'Q':
            cell.setFigure(new Queen(Color.WHITE));
            break;
          case 'K':
            cell.setFigure(new King(Color.WHITE));
            break;
          case 'p':
            cell.setFigure(new Pawn(Color.BLACK, i === 1, true));
            break;
          case 'n':
            cell.setFigure(new Knight(Color.BLACK));
            break;
          case 'b':
            cell.setFigure(new Bishop(Color.BLACK));
            break;
          case 'r':
            cell.setFigure(new Rook(Color.BLACK));
            break;
          case 'q':
            cell.setFigure(new Queen(Color.BLACK));
            break;
          case 'k':
            cell.setFigure(new King(Color.BLACK));
            break;
          default:
            break;
        }
      }
      grid.push(cells);
    }
    return grid;
  }
}
