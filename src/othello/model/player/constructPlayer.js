import { constructIdentity } from '../identity';

const PERSON_IDENTITY = 'f10054fa-101c-5cde-9eea-6e6708d87b4c';

export default function constructPlayer(name = 'anonymous', color = 'W') {
  return { name, color, ...constructIdentity(PERSON_IDENTITY) };
}
