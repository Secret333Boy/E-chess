import React, { useContext, useEffect, useState } from 'react';
import PlayerContext from '../contexts/PlayerContext';
import Board from '../models/Board';
import { Color } from '../models/enums/Color';
import Player from '../models/Player';
import TimerComponent from '../components/TimerComponent';
import BoardComponent from './BoardComponent';
import { GameMode } from '../models/enums/GameMode';
import WebSocketContext from '../contexts/WebSocketContext';
import { useAppSelector } from '../store/hooks';

interface GameComponentProps {
  gameMode: GameMode;
}

const GameComponent: React.FC<GameComponentProps> = ({ gameMode }) => {
  if (!gameMode) throw new Error('Game mode is not defined');
  const [board, setBoard] = useState<Board>(new Board());
  const [player, setPlayer] = useState<Player | null>(null);
  const gameId = useAppSelector((state) => state.gameReducer.gameId);
  const color = useAppSelector((state) => state.gameReducer.color);
  const ws = useContext(WebSocketContext);

  useEffect(() => {
    setPlayer(
      new Player(
        gameMode === GameMode.WITH_A_FRIEND ? null : Color.WHITE,
        board,
        () => setBoard(board.copy()),
        gameMode
      )
    );
    const initialColor = color;
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'turn') {
        board.togglePlayerColor();
        setPlayer(
          new Player(
            initialColor,
            board,
            () => setBoard(board.copy()),
            gameMode,
            ws,
            gameId
          )
        );
      }

      if (data.type === 'update') {
        board.applyFENCode(data.fen);
        ws.send(JSON.stringify({ type: 'ready' }));
      }
      setBoard(board.copy());
    };
    ws.send(JSON.stringify({ type: 'ready' }));
  }, []);
  return (
    <>
      <div>{gameMode}</div>
      <div>Turn: {board.getPlayerColor().toLowerCase()}</div>
      <TimerComponent />
      <PlayerContext.Provider value={{ player }}>
        <BoardComponent board={board} />
      </PlayerContext.Provider>
    </>
  );
};

export default GameComponent;
