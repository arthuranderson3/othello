import reduce from 'lodash/reduce';

export default function calculateScore( { squaresObj }, color ) {
	return reduce( squaresObj, ( score, square ) => (square === color) ? score + 1 : score, 0 );
}
