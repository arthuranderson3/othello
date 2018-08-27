import dropRight from 'lodash.dropRight';

export default function undoMove({ history }) {
  return { history: dropRight(history) };
}
