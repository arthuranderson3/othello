import uuidv5 from 'uuid/v5';

const OTHELLO_NAMESPACE = process.env.OTHELLO_NAMESPACE;
export default function constructIdentity(name, namespace = OTHELLO_NAMESPACE) {
  return {
    id: uuidv5(name, namespace),
  };
}
