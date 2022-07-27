import React, { FC } from 'react';
import Cell, { CellColor } from '../models/Cell';

interface CellComponentProps {
  cell: Cell;
}

const CellComponent: FC<CellComponentProps> = ({ cell }) => {
  return (
    <div
      className="cell"
      style={{
        backgroundColor:
          cell.getColor() === CellColor.WHITE
            ? 'rgb(245, 225, 204)'
            : 'rgb(152, 115, 75)',
      }}
    ></div>
  );
};

export default CellComponent;
