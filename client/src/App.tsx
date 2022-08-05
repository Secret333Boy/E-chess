import React from 'react';
import './App.scss';
import GameComponent from './components/GameComponent';
import GameIdForm from './components/GameIdForm';
import MainMenuComponent from './components/MainMenuComponent';
import { GameMode } from './models/enums/GameMode';
import { useAppSelector } from './store/hooks';

const App = () => {
  const gameMode = useAppSelector((state) => state.gameReducer.gameMode);
  const gameID = useAppSelector((state) => state.gameReducer.gameId);

  if (!gameMode)
    return (
      <div className="App">
        <MainMenuComponent />
      </div>
    );

  if (gameMode === GameMode.WITH_A_FRIEND && !gameID)
    return (
      <div className="App">
        <GameIdForm />
      </div>
    );

  return (
    <div className="App">
      <GameComponent gameMode={gameMode} />
    </div>
  );
};

export default App;
