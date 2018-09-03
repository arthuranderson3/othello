import uuidv5 from 'uuid/v5';
import uuidv4 from 'uuid/v4';

const OTHELLO_NAMESPACE = process.env.OTHELLO_NAMESPACE;
// export default function constructIdentity(name, namespace = OTHELLO_NAMESPACE) {
export default function constructIdentity() {
  return {
    // id: uuidv5(name, namespace),
    id: uuidv4(),
  };
}
