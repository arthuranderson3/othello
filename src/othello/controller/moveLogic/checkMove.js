import makeMove from './makeMove';

export default function checkMove(state, index) {
  return new Promise((resolve, reject) => {
    try{
      return resolve( makeMove( state, index ) );
    } catch ( e ) {
      return reject( e );
    }
  });
}
