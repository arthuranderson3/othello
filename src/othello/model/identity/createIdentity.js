import constructIdentity from './constructIdentity';

export default function createIdentity({ id } = constructIdentity()) {
  return { id };
}
