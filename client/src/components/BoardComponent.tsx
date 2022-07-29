import React, { FC } from 'react';
import Board from '../models/Board';
import CellComponent from './CellComponent';

interface BoardComponentProps {
  board: Board;
}

const BoardComponent: FC<BoardComponentProps> = ({ board }) => {
  return (
    <div className="board">
      {board.getGrid().map((row, i) => (
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
