import _ from 'lodash';
import DEFAULT_SQUARES from './DEFAULT_SQUARES';

export default function toSquaresArray(squares_obj = { ...DEFAULT_SQUARES }) {
  const arr = new Array(64);
  arr.fill(undefined);
  _.forIn(squares_obj, (value, key) => (arr[parseInt(key, 10)] = value));
  return arr;
}
