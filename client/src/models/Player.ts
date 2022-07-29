import Board from './Board';
import Figure from './Figure';

export default class Player {
  public selectedFigure: Figure | null = null;
  private board: Board;
  private updateBoard: () => void;

  constructor(board: Board, updateBoard: () => void) {
    this.board = board;
    this.updateBoard = updateBoard;
  }

  public selectFigure(figure: Figure) {
    this.selectedFigure = figure;
    figure.availableMoves.map((move) => {
      this.board.getCell(move.to).toggleAvailable();
    });
    this.updateBoard();
    return this;
  }

  public unselectFigure() {
    this.selectedFigure?.availableMoves.map((move) => {
      this.board.getCell(move.to).toggleAvailable();
    });
    this.selectedFigure = null;
    this.updateBoard();
  }
}
