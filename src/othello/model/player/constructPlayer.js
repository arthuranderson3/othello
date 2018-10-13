import { constructIdentity } from '../identity';

export default function constructPlayer(
  name = 'anonymous',
  color = 'W',
  type = 'human',
  delay = 1
) {
  return { ...constructIdentity(), name, color, type, delay };
}
