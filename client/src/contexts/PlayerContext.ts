import { createContext } from 'react';
import Player from '../models/Player';

interface IPlayerContext {
  readonly player?: Player;
}

export default createContext<IPlayerContext>({});
