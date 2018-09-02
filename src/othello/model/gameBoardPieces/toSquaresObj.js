import reduce from 'lodash.reduce';

export default function toSquaresObj(squares_arr) {
  if (Array.isArray(squares_arr)) {
    return reduce(
      squares_arr,
      (acc, value, idx) => {
        if (value) {
          acc[idx] = value;
        }
        return acc;
      },
      {}
    );
  }
  return undefined;
}
