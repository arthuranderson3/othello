import makeMove from './makeMove';

export default function checkMove(state, idx) {
  return new Promise((resolve, reject) => {
    try{
      return resolve( makeMove( state, idx ) );
    } catch ( e ) {
      return reject( e );
    }
  });
}
