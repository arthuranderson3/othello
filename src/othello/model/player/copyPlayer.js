import copyIdentity from '../identity/copyIdentity';

export default function copyPlayer({ color, id, name, type, delay }) {
  return {
    color,
    ...copyIdentity({ id }),
    name,
    type,
    delay,
  };
}
