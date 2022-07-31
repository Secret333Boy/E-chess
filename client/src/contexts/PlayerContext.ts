import { createContext } from 'react';
import Board from '../models/Board';
import { Color } from '../models/Color';
import Player from '../models/Player';

interface IPlayerContext {
  readonly player: Player | null;
}

export default createContext<IPlayerContext>({
  player: new Player(Color.WHITE, new Board(), () => {
    return;
  }),
});
