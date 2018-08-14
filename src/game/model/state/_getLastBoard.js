
export function getLastBoard( {history} ) {
    const len = history.length;
    if( len > 0 ) {
        return history[ len - 1 ].clone();
    } else {
        return undefined;
    }
}
