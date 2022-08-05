import React, { useContext, useEffect, useRef, useState } from 'react';
import WebSocketContext from '../contexts/WebSocketContext';
import { setGameId } from '../store/actions/gameActions';
import { useAppDispatch } from '../store/hooks';

const GameIdForm = () => {
  const [initialGameId, setInitialGameId] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const ws = useContext(WebSocketContext);
  useEffect(() => {
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'gameId') {
        setInitialGameId(data.id);
      }

      if (data.type === 'verified') {
        console.log(data.id);
        dispatch(setGameId(data.id));
      }
    };
    ws.send(JSON.stringify({ type: 'request' }));

    return () => {
      ws.onmessage = null;
    };
  }, []);
  return (
    <div className="gameidform">
      <div>
        <div>Enter your code here:</div>
        <input type="text" ref={inputRef} />
        <button
          onClick={() => {
            ws.send(
              JSON.stringify({
                type: 'verify',
                gameId: inputRef.current?.value,
              })
            );
          }}
        >
          Submit
        </button>
      </div>
      --or--
      <div>
        <div>Give this code to your friend:</div>
        <input type="text" defaultValue={initialGameId} />
      </div>
    </div>
  );
};

export default GameIdForm;
