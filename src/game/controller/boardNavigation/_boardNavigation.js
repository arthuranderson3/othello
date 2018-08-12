import { toRow, toCol, toIdx, createRowCol } from '../boardTransform';

export function boardNavigation( opRow, opCol ) {
	return ( i ) => toIdx( createRowCol( 
														toRow( i ) + opRow, 
								            toCol( i ) + opCol ) );
}