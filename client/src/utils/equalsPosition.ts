import Position from '../models/interfaces/Position';

export default (position1: Position, position2: Position) => {
  return position1.x === position2.x && position1.y === position2.y;
};
