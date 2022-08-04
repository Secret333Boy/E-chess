import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameMode } from '../../models/GameMode';

interface GameModeState {
  gameMode: GameMode | null;
}

const initialState: GameModeState = {
  gameMode: null,
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
