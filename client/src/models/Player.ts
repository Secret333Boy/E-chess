import Board from './Board';
import { Color } from './Color';
import Figure from './Figure';
import Pawn from './figures/Pawn';
import Move from './Move';

export default class Player {
  public selectedFigure: Figure | null = null;
  public color: Color;
  private board: Board;
  private updateBoard: () => void;

  constructor(color: Color, board: Board, updateBoard: () => void) {
    board.initCells(color === Color.WHITE);
    this.color = color;
    this.board = board;
    this.updateBoard = updateBoard;
  }

  public selectFigure(figure: Figure) {
    this.selectedFigure = figure;
    figure.availableMoves.map((move) => {
      this.board.getCell(move.to)?.toggleAvailable();
    });
    this.updateBoard();
    return this;
  }

  public unselectFigure() {
    this.selectedFigure?.availableMoves.map((move) => {
      this.board.getCell(move.to)?.toggleAvailable();
    });
    this.selectedFigure = null;
    this.updateBoard();
  }

  public makeMove(move?: Move) {
    if (
      move &&
      (this.selectedFigure?.availableMoves.filter(
        (m) => m.to.x === move.to.x && m.to.y === move.to.y
      ).length as number) > 0
    ) {
      this.selectedFigure?.availableMoves.map((move) => {
        this.board.getCell(move.to)?.toggleAvailable();
      });
      this.selectedFigure?.cell?.setFigure(null);
      if (Pawn.isPawn(this.selectedFigure)) {
        this.selectedFigure = (<Pawn>this.selectedFigure)?.updateFirstMove();
      }
      this.board.getCell(move.to)?.setFigure(this.selectedFigure);
      this.selectedFigure = null;
      this.updateBoard();
    }
  }

  public getBoard(): Board {
    return this.board;
  }
}
