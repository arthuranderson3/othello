import copyIdentity from '../identity/copyIdentity';

export default function copyPlayer( { color, id, name, tz } ) {
  return {
    color,
    ...copyIdentity({ id }),
    name,
    tz
  };
}
