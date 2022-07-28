import Cell from './Cell';
import { Color } from './Color';
import Bishop from './figures/Bishop';
import King from './figures/King';
import Knight from './figures/Knight';
import Pawn from './figures/Pawn';
import Queen from './figures/Queen';
import Rook from './figures/Rook';

export default class Board {
  public grid: Cell[][];

  constructor() {
    this.grid = [];
    for (let i = 0; i < 8; i++) {
      this.grid.push([]);
      for (let j = 0; j < 8; j++) {
        this.grid[i].push(
          new Cell((i + j) % 2 ? Color.BLACK : Color.WHITE, { x: i, y: j })
        );
      }
    }
    this.initCells();
  }

  private initCells() {
    [0, 1, 6, 7].map((i) => {
      const color = i < 2 ? Color.BLACK : Color.WHITE;
      if (i === 0 || i === 7) {
        [0, 7].map((j) => {
          this.grid[i][j].setFigure(new Rook(color));
        });
        [1, 6].map((j) => {
          this.grid[i][j].setFigure(new Knight(color));
        });
        [2, 5].map((j) => {
          this.grid[i][j].setFigure(new Bishop(color));
        });
        this.grid[i][3].setFigure(new Queen(color));
        this.grid[i][4].setFigure(new King(color));
        return;
      }

      for (let j = 0; j < 8; j++) {
        this.grid[i][j].setFigure(new Pawn(color));
      }
    });
  }
}
