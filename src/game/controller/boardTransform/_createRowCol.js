import { toRow } from './_toRow';
import { toCol } from './_toCol';

export function createRowCol( row, col ) {
	  if( row > -1 && row < 8 && col > -1 && col < 8 ) {
	      return { row, col };
	  }
	  return undefined;
}