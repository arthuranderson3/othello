import checkMove from './checkMove';
import constructGame from '../../model/game/constructGame';
import createGame from '../../model/game/createGame';
import getLastBoard from '../../model/state/getLastBoard';
import fs from 'fs';
import path from 'path';

describe('checkMove Test Suite', () => {
  it('checkMove#success', (done) => {
    const state = constructGame();
    checkMove(state, 29)
      .then(state => {
        expect(state.history.length).toBe(2);
        done();
      })
      .catch(err => { console.error( err ), done(err); });
  });

  it("checkMove#capture2", done => {
    const file = fs.readFileSync(path.join(__dirname, "checkMove.test.capture2.json" ));
    const gameState = createGame( JSON.parse(file) );
    const debugBoard = getLastBoard(gameState);
    expect( debugBoard.player ).toEqual('B');
    expect( debugBoard.validSquares[0] ).toEqual(0);

    checkMove( gameState, 0 )
      .then( state => {
        const lastBoard = getLastBoard( state );
        expect( lastBoard.player ).toEqual('W');
        done();
      })
      .catch( err => { done.fail(err); });

  });
});
