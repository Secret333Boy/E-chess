import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Color } from '../../models/enums/Color';
import { GameMode } from '../../models/enums/GameMode';

interface GameState {
  gameMode: GameMode | null;
  gameId: string;
  color: Color | null;
}

const initialState: GameState = {
  gameMode: null,
  gameId: '',
  color: null,
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
    setColor: (state, action: PayloadAction<Color | null>) => {
      state.color = action.payload;
    },
  },
});

export default gameSlice;
