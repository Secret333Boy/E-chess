import React, { useEffect, useState } from 'react';
import PlayerContext from '../contexts/PlayerContext';
import Board from '../models/Board';
import { Color } from '../models/Color';
import Player from '../models/Player';
import TimerComponent from '../components/TimerComponent';
import BoardComponent from './BoardComponent';
import { GameMode } from '../models/GameMode';

interface GameComponentProps {
  gameMode: GameMode;
}

const GameComponent: React.FC<GameComponentProps> = ({ gameMode }) => {
  if (!gameMode) throw new Error('Game mode is not defined');
  const [board, setBoard] = useState<Board>(new Board());
  const [player, setPlayer] = useState<Player | null>(null);
  useEffect(() => {
    setPlayer(
      new Player(Color.WHITE, board, () => setBoard(board.copy()), gameMode)
    );
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
