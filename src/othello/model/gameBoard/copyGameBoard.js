
export default function copyGameBoard( { id, squaresObj, player, turn, index, validSquares }) {
  return { id, squaresObj, player, turn, index, validSquares: [ ...validSquares] };
}
