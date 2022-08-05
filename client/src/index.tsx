import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import WebSocketContext, { initialValue } from './contexts/WebSocketContext';
import './index.scss';
import { store } from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <WebSocketContext.Provider value={initialValue}>
      <Provider store={store}>
        <App />
      </Provider>
    </WebSocketContext.Provider>
  </React.StrictMode>
);
