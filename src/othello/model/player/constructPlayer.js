import { constructIdentity } from '../identity';

export default function constructPlayer(name = 'anonymous', color = 'W', tz = 'America/Louisville') {
  return { ...constructIdentity(), name, color, tz };
}
