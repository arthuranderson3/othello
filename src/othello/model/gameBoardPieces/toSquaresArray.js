import forIn from 'lodash.forin';
import fill from 'lodash.fill';

//
// from { '1': 'B', '2': 'W' }
// to [ undefined, 'B', 'W' ]
//
export default function toSquaresArray( { squaresObj } ) {
  const arr = new Array(64);
  fill(arr, undefined);
  forIn(squaresObj, (value, key) => arr[parseInt(key, 10)] = value );
  return { squaresArr: arr };
}
