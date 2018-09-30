export const WHITE_CIRCLE = String.fromCodePoint(9898);
export const BLACK_CIRCLE = String.fromCodePoint(9899);

const GamePiece = value => {
  return value ? (value === 'W' ? WHITE_CIRCLE : BLACK_CIRCLE) : '';
};

export default GamePiece;
