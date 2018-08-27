import createGameState from './createGameState';

export default function recordLastBoard({ history }, gb) {
  if (Array.isArray(history)) {
    history.push(gb);
    return createGameState(history);
  }
  return undefined;
}
