import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameMode } from '../../models/enums/GameMode';

interface GameState {
  gameMode: GameMode | null;
  gameId: string;
}

const initialState: GameState = {
  gameMode: null,
  gameId: '',
};

const gameSlice = createSlice({
  name: 'gameMode',
  initialState,
  reducers: {
    setGameMode: (state, action: PayloadAction<GameMode>) => {
      state.gameMode = action.payload;
    },
    setGameId: (state, action: PayloadAction<string>) => {
      state.gameId = action.payload;
    },
  },
});

export default gameSlice;
