import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './reducers/gameReducer';

export const store = configureStore({
  reducer: { gameReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
