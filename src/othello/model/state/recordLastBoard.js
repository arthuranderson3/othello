import createGameState from './createGameState';

export default function recordLastBoard({ history }, gb) {
  history.push(gb);
  return createGameState(history);
}
