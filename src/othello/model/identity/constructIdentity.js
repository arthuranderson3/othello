import uuidv4 from 'uuid/v4';

export default function constructIdentity() {
  return {
    id: uuidv4(),
  };
}
