
export default function createValidSquares( squares ) {
	if( Array.isArray( squares ) ){
		return { validSquares: [ ...squares ]};
	}
	return undefined;
}
