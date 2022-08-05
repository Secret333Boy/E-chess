import React from 'react';
import { useAppDispatch } from '../store/hooks';
import { GameMode } from '../models/enums/GameMode';
import { setGameMode } from '../store/actions/gameActions';

const MainMenuComponent = () => {
  const dispath = useAppDispatch();
  return (
    <div className="mainmenu">
      <button onClick={() => dispath(setGameMode(GameMode.ON_THE_SAME_DEVICE))}>
        On the same device
      </button>
      <button onClick={() => dispath(setGameMode(GameMode.WITH_A_FRIEND))}>
        With a friend online
      </button>
      <button onClick={() => dispath(setGameMode(GameMode.WITH_A_BOT))}>
        With a bot
      </button>
    </div>
  );
};

export default MainMenuComponent;
