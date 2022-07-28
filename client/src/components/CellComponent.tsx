import React, { FC } from 'react';
import Cell from '../models/Cell';
import { Color } from '../models/Color';

interface CellComponentProps {
  cell: Cell;
}

const CellComponent: FC<CellComponentProps> = ({ cell }) => {
  return (
    <div
      className="cell"
      style={{
        backgroundColor:
          cell.color === Color.WHITE
            ? 'rgb(245, 225, 204)'
            : 'rgb(152, 115, 75)',
      }}
    ></div>
  );
};

export default CellComponent;
