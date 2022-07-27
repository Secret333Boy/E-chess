import Figure from './Figure';

export enum CellColor {
  WHITE = 'WHITE',
  BLACK = 'BLACK',
}

export default class Cell {
  private figure: Figure | null = null;
  private readonly color: CellColor;

  constructor(color: CellColor) {
    this.color = color;
  }

  public getFigure(): Figure | null {
    return this.figure;
  }

  public setFigure(figure: Figure | null): void {
    this.figure = figure;
  }

  public getColor(): CellColor {
    return this.color;
  }
}
