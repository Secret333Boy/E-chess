import Cell from './Cell';
import { Color } from './Color';
import Bishop from './figures/Bishop';
import King from './figures/King';
import Knight from './figures/Knight';
import Pawn from './figures/Pawn';
import Queen from './figures/Queen';
import Rook from './figures/Rook';
import Position from './Position';

export default class Board {
  private grid: Cell[][];

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

  private initCells(playedIsBlack = false) {
    const playerColor = playedIsBlack ? Color.BLACK : Color.WHITE;
    const enemyColor = playedIsBlack ? Color.WHITE : Color.BLACK;
    [0, 1, 6, 7].map((i) => {
      const color = i < 2 ? enemyColor : playerColor;
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
        this.grid[i][j].setFigure(new Pawn(color, i === 1));
      }
    });
  }

  public getGrid(): Cell[][] {
    return this.grid;
  }

  public getCell(position: Position): Cell {
    return this.grid[position.x][position.y];
  }

  public copy(): Board {
    const board = new Board();
    board.grid = this.grid;
    return board;
  }
}
