import { buildIdentity } from '../identity';

const OTHELLO_GAME = '4f2aed3d-f1e6-565d-aedf-714d8e765c3d';

export default function createOthelloGame(game) {
  return {
    startTime: Date.now(),
    ...buildIdentity(OTHELLO_GAME),
    ...buildPlayer('One'),
  };
}
