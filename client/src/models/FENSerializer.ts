import Cell from './Cell';

export default class FENSerializer {
  public static serialize(grid: Cell[][]): string {
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
      if (c !== 0) {
        row += c;
        c = 0;
      }
      result.push(row);
    }
    return result.join('/');
  }
}
