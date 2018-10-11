import gameStati from './gameStati';

export default function copyGameBoard({
  id,
  squaresObj,
  gameStatus,
  player,
  turn,
  index,
  validSquares,
}) {
  return { id, squaresObj, gameStatus, player, turn, index, validSquares: [...validSquares] };
}
