import React, { useEffect, useState } from 'react';
import './App.scss';
import BoardComponent from './components/BoardComponent';
import PlayerContext from './contexts/PlayerContext';
import Board from './models/Board';
import { Color } from './models/Color';
import Player from './models/Player';

const App = () => {
  const [board, setBoard] = useState<Board>(new Board());
  const [player, setPlayer] = useState<Player | null>(null);
  useEffect(() => {
    setPlayer(new Player(Color.WHITE, board, () => setBoard(board.copy())));
  }, []);
  return (
    <div className="App">
      <PlayerContext.Provider value={{ player }}>
        <BoardComponent board={board} />
      </PlayerContext.Provider>
    </div>
  );
};

export default App;
