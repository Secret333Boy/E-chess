import { configureStore } from '@reduxjs/toolkit';
import gameModeReducer from './reducers/gameModeReducer';
import playerReducer from './reducers/playerReducer';

export const store = configureStore({
  reducer: { gameModeReducer, playerReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
