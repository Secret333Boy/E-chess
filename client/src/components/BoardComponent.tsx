import React, { useState } from 'react';
import Board from '../models/Board';
import CellComponent from './CellComponent';

const BoardComponent = () => {
  const [board, setBoard] = useState(new Board());

  return (
    <div className="board">
      {board.grid.map((row, i) => (
        <div key={i}>
          <span>{8 - i}</span>
          {row.map((cell, j) => (
            <CellComponent cell={cell} key={i * row.length + j} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default BoardComponent;
