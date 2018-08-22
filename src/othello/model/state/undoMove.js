import _ from 'lodash';

export default function undoMove({ history }) {
  return { history: _.dropRight(history) };
}
