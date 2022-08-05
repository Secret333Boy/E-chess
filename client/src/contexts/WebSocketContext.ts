import { createContext } from 'react';

export const initialValue = new WebSocket(
  process.env.REACT_APP_WS_URL || 'ws://localhost:5000'
);

export default createContext<WebSocket>(initialValue);
