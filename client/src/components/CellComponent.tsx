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
      onDragOver={
        cell.available
          ? (e) => {
              e.preventDefault();
              e.dataTransfer.dropEffect = 'move';
            }
          : undefined
      }
      onDrop={
        cell.available
          ? () => {
              player?.makeMove(
                player?.selectedFigure?.availableMoves.filter(
                  (move) =>
                    move.to.x === cell.position.x &&
                    move.to.y === cell.position.y
                )[0]
              );
            }
          : undefined
      }
    >
      {cell.isEmpty ? null : (
        <img
          src={'./sprites/' + cell.getFigure()?.spriteName}
          onDragStart={(e) => {
            e.dataTransfer.dropEffect = 'move';
            player?.unselectFigure();
            player?.selectFigure(cell.getFigure() as Figure);
          }}
          onDragEnd={() => {
            player?.unselectFigure();
          }}
        ></img>
      )}
    </div>
  );
};

export default CellComponent;
