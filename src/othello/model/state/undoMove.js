import dropRight from 'lodash.dropright';

export default function undoMove({ history }) {
  if (Array.isArray(history) && history.length > 1) {
    return { history: dropRight(history) };
  }
  return undefined;
}
