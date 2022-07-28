import Cell from './Cell';
import { Color } from './Color';

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
  }
}
