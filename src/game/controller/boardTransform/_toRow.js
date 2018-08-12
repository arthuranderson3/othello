export function toRow( i ) { 
    if( i < 0 || i > 63 ) return undefined; 
    return Math.floor( i / 8 );
}
