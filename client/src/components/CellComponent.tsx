import React, { FC, useContext } from 'react';
import PlayerContext from '../contexts/PlayerContext';
import Cell from '../models/Cell';
import { Color } from '../models/Color';
import Figure from '../models/Figure';

interface CellComponentProps {
  cell: Cell;
}

const CellComponent: FC<CellComponentProps> = ({ cell }) => {
  const { player } = useContext(PlayerContext);
  return (
    <div
      className="cell"
      style={{
        backgroundColor:
          cell.color === Color.WHITE
            ? 'rgb(245, 225, 204)'
            : 'rgb(152, 115, 75)',
        border: `${cell.available ? '5' : '0'}px solid red`,
      }}
      onClick={() => {
        if (cell.isEmpty || cell.getFigure()?.color !== player.color) return;
        player?.selectFigure(cell.getFigure() as Figure);
      }}
    >
      {cell.isEmpty ? null : (
        <img src={'./sprites/' + cell.getFigure()?.spriteName}></img>
      )}
    </div>
  );
};

export default CellComponent;
