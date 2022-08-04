import React from 'react';
import './App.scss';
import GameComponent from './components/GameComponent';
import MainMenuComponent from './components/MainMenuComponent';
import { useAppSelector } from './store/hooks';

const App = () => {
  const gameMode = useAppSelector((state) => state.gameModeReducer.gameMode);

  return (
    <div className="App">
      {gameMode ? <GameComponent gameMode={gameMode} /> : <MainMenuComponent />}
    </div>
  );
};

export default App;
