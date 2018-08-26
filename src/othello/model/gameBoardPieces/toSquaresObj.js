import _ from 'lodash';

export default function toSquaresObj(squares_arr) {
  return _.reduce(
    squares_arr,
    (acc, value, index, collection) => {
      if (value) {
        acc[index] = value;
      }
      return acc;
    },
    {},
  );
}
