import { configureStore } from '@reduxjs/toolkit';
import gameModeReducer from './reducers/gameModeReducer';

export const store = configureStore({
  reducer: { gameModeReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
