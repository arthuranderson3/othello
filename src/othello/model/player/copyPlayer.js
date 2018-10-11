import copyIdentity from '../identity/copyIdentity';

export default function copyPlayer({ color, id, name, type }) {
  return {
    color,
    ...copyIdentity({ id }),
    name,
    type,
  };
}
