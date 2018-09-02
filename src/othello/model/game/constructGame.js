import constructIdentity from '../identity/constructIdentity';
import constructPlayer from '../player/constructPlayer';

const GAME_IDENTITY = 'ddbffb14-a3be-5f98-ad1b-6d184c5fa670';

export default function constructGame(startTime = Date.now()) {
  return {
    ...constructIdentity(GAME_IDENTITY),
    startTime,
  };
}
