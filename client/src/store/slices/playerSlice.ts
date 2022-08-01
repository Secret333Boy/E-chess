import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Board from '../../models/Board';
import { Color } from '../../models/Color';
import Player from '../../models/Player';

interface PlayerState {
  player: Player;
}

const initialState: PlayerState = {
  player: new Player(Color.WHITE, new Board(), () => {
    return;
  }),
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setPlayer: (state, action: PayloadAction<Player>) => {
      state.player = action.payload;
    },
  },
});

export default playerSlice;
