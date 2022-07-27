import React, { useState } from 'react';
import './Board.scss';

const Board = () => {
  const [boardState, setBoardState] = useState(
    new Array(8).fill(new Array(8).fill(null))
  );

  return (
    <table className="board">
      <tbody>
        {boardState.map((row: Array<string | null>, i) => (
          <tr key={i}>
            {row.map((item, j) => (
              <td key={i * row.length + j}>{item}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Board;
