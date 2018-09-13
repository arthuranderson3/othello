import fs from 'fs';
import path from 'path';
import copyGame from '../../model/game/copyGame';
import constructGame from '../../model/game/constructGame';
import makeMove from './makeMove';
import currentSnapshot from '../../model/game/currentSnapshot';

describe('makeMove test suite', () => {

	describe('initial board index 29', () => {
    let state;
    beforeAll( () => {
      const game = constructGame();
			try{
      	state = makeMove( game, 29 )
			} catch( e ) {
				console.info('initial board error thrown');
				throw e;
			}
    });
		it('state.snapshots.length=2', () => {
			expect( state.snapshots.length ).toEqual(2);
		})
  });

	describe('capture2 - debug board', () => {
    let debugBoard;
    beforeAll( () => {
      const file = fs.readFileSync(path.join(__dirname, "checkMove.test.capture2.json" ));
      const gameState = copyGame( JSON.parse(file) );
      debugBoard = currentSnapshot( gameState );
    });
    it( 'debugBoard.player=B', () => {
      expect(debugBoard.player).toEqual('B');
    });
    it( 'debugBoard.validSquares', () => {
      expect( debugBoard.validSquares ).toEqual([0]);
    })
  });

  describe('capture2 - debug board move index 0', () => {
    let lastBoard;
    beforeAll( () => {
      const file = fs.readFileSync(path.join(__dirname, "checkMove.test.capture2.json" ));
      const gameState = copyGame( JSON.parse(file) );
			try{
      	const state = makeMove( gameState, 0 );
				lastBoard = currentSnapshot( state );
			} catch( e ) {
				console.info( 'capture 2 debug board error thrown');
				throw e;
			}
    });

    it('lastBoard.player=W', () => {
      expect( lastBoard.player ).toEqual( 'W' );
    });
    it('lastBoard.validSquares=[49,50,53]', () => {
      expect( lastBoard.validSquares ).toEqual([49,50,53]);
    });
  });
});
