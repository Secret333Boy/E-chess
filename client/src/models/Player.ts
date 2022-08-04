import Board from './Board';
import { Color } from './enums/Color';
import Figure from './Figure';
import Pawn from './figures/Pawn';
import { GameMode } from './enums/GameMode';
import Move from './Move';

export default class Player {
  public selectedFigure: Figure | null = null;
  public color: Color;
  private board: Board;
  private updateBoard: () => void;
  private gameMode: GameMode;

  constructor(
    color: Color,
    board: Board,
    updateBoard: () => void,
    gameMode = GameMode.ON_THE_SAME_DEVICE
  ) {
    board.initCells(color === Color.WHITE);
    this.color = color;
    this.board = board;
    this.updateBoard = updateBoard;
    this.gameMode = gameMode;
  }

  public selectFigure(figure: Figure) {
    this.selectedFigure = figure;
    figure.availableMoves.forEach((move) => {
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
      this.selectedFigure?.availableMoves.map((availableMove) => {
        this.board.getCell(availableMove.to)?.toggleAvailable();
      });
      this.selectedFigure?.cell?.setFigure(null);
      if (Pawn.isPawn(this.selectedFigure)) {
        this.selectedFigure = (<Pawn>this.selectedFigure)?.updateFirstMove();
      }
      this.board.getCell(move.to)?.setFigure(this.selectedFigure);
      this.selectedFigure = null;
      if (this.gameMode === GameMode.ON_THE_SAME_DEVICE) {
        this.color = this.color === Color.WHITE ? Color.BLACK : Color.WHITE;
        this.board.togglePlayerColor();
      }
      this.updateBoard();
    }
  }

  public getBoard(): Board {
    return this.board;
  }
}
