import _ from 'lodash';

export default function undo({ history }) {
  return { history: _.dropRight(history) };
}
