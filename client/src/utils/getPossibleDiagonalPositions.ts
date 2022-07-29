import Board from '../models/Board';
import Position from '../models/Position';

export default (
  position: Position,
  board?: Board
  // eslint-disable-next-line sonarjs/cognitive-complexity
): Position[] => {
  const newPositions: Position[] = [];

  for (
    let x = position.x - 1;
    x >= 0 && position.y - (position.x - x) >= 0;
    x--
  ) {
    const newPosition: Position = { x, y: position.y - (position.x - x) };
    newPositions.push(newPosition);
    if (!board?.getCell(newPosition).isEmpty) {
      break;
    }
  }

  for (
    let x = position.x + 1;
    x < 8 && position.y - (position.x - x) < 8;
    x++
  ) {
    const newPosition: Position = { x, y: position.y - (position.x - x) };
    newPositions.push(newPosition);
    if (!board?.getCell(newPosition).isEmpty) {
      break;
    }
  }

  for (
    let y = position.y - 1;
    y >= 0 && position.x + (position.y - y) < 8;
    y--
  ) {
    const newPosition: Position = { x: position.x + (position.y - y), y };
    newPositions.push(newPosition);
    if (!board?.getCell(newPosition).isEmpty) {
      break;
    }
  }

  for (
    let y = position.y + 1;
    y < 8 && position.x + (position.y - y) >= 0;
    y++
  ) {
    const newPosition: Position = { x: position.x + (position.y - y), y };
    newPositions.push(newPosition);
    if (!board?.getCell(newPosition).isEmpty) {
      break;
    }
  }

  return newPositions;
};
