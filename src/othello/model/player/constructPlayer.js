import { constructIdentity } from '../identity';

export default function constructPlayer(name = 'anonymous', color = 'W', type = 'human') {
  return { ...constructIdentity(), name, color, type };
}
