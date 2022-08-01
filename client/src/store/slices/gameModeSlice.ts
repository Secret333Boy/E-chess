import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameMode } from '../../models/GameMode';

interface GameModeState {
  gameMode: GameMode;
}

const initialState: GameModeState = {
  gameMode: GameMode.ON_THE_SAME_DEVICE,
};

const gameModeSlice = createSlice({
  name: 'gameMode',
  initialState,
  reducers: {
    setGameMode: (state, action: PayloadAction<GameMode>) => {
      state.gameMode = action.payload;
    },
  },
});

export default gameModeSlice;
