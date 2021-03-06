import reduce from 'lodash.reduce';

export default function toSquaresObj( { squaresArr } ) {
  if (Array.isArray(squaresArr)) {
    return { squaresObj: reduce(
      squaresArr,
      (acc, value, idx) => {
        if (value) {
          acc[idx] = value;
        }
        return acc;
      },
      {}
    ) };
  }
  return undefined;
}
