import dropRight from 'lodash.dropright';

export default function undoMove({ history }) {
  return { history: dropRight(history) };
}
