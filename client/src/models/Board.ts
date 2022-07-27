import Cell, { CellColor } from './Cell';

export default class Board {
  public grid: Cell[][];

  constructor() {
    this.grid = [];
    for (let i = 0; i < 8; i++) {
      this.grid.push([]);
      for (let j = 0; j < 8; j++) {
        this.grid[i].push(
          new Cell((i + j) % 2 ? CellColor.BLACK : CellColor.WHITE)
        );
      }
    }
  }
}
