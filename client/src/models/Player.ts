import Board from './Board';
import { Color } from './enums/Color';
import Figure from './Figure';
import Pawn from './figures/Pawn';
import { GameMode } from './enums/GameMode';
import Move from './Move';

export default class Player {
  public selectedFigure: Figure | null = null;
  public color: Color | null;
  private board: Board;
  private updateBoard: () => void;
  private gameMode: GameMode;
  private ws?: WebSocket;
  private gameId?: string;

  constructor(
    color: Color | null,
    board: Board,
    updateBoard: () => void,
    gameMode = GameMode.ON_THE_SAME_DEVICE,
    ws?: WebSocket,
    gameId?: string
  ) {
    this.color = color;
    this.board = board;
    this.updateBoard = updateBoard;
    this.gameMode = gameMode;
    this.ws = ws;
    this.gameId = gameId;
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
      }

      if (this.gameMode === GameMode.WITH_A_FRIEND) {
        this.color = null;
        this.ws?.send(
          JSON.stringify({
            type: 'move',
            id: this.gameId,
            fen: this.board.getFENCode(),
          })
        );
      }
      this.board.togglePlayerColor();
      this.updateBoard();
    }
  }

  public getBoard(): Board {
    return this.board;
  }
}
