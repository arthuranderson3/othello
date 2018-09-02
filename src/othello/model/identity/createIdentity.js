import constructIdentity from './constructIdentity';

const IDENTITY_NAME = '1e868f19-222c-5ff3-855e-0918c527cc67';

export default function createIdentity({ id } = constructIdentity(IDENTITY_NAME)) {
  return { id };
}
