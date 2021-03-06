import checkMove from './checkMove';
import constructGame from '../../model/game/constructGame';
import copyGame from '../../model/game/copyGame';
import fs from 'fs';
import path from 'path';

describe('checkMove Test Suite', () => {
  describe('initial board index 29', () => {
    let game;
    beforeAll(done => {
      game = constructGame();
      checkMove(game, 29)
        .then(state => {
          expect(state.snapshots.length).toEqual(2);
          done();
        })
        .catch(err => done.fail(err));
    });
  });

  describe('capture2 - debug board', () => {
    let debugBoard;
    beforeAll(() => {
      const file = fs.readFileSync(path.join(__dirname, 'checkMove.test.capture2.v2.json'));
      const gameState = copyGame(JSON.parse(file));
      debugBoard = gameState.snapshots[gameState.snapshots.length - 1];
    });
    it('debugBoard.player=B', () => {
      expect(debugBoard.player).toEqual('B');
    });
    it('debugBoard.validSquares', () => {
      expect(debugBoard.validSquares).toEqual([0]);
    });
  });

  describe('capture2 - debug board move index 0', () => {
    let lastBoard;
    beforeAll(done => {
      const file = fs.readFileSync(path.join(__dirname, 'checkMove.test.capture2.v2.json'));
      const gameState = copyGame(JSON.parse(file));
      checkMove(gameState, 0)
        .then(state => {
          lastBoard = state.snapshots[state.snapshots.length - 1];
          done();
        })
        .catch(err => done.fail(err));
    });

    it('lastBoard.player=W', () => {
      expect(lastBoard.player).toEqual('W');
    });
    it('lastBoard.validSquares=[49,50,53]', () => {
      expect(lastBoard.validSquares).toEqual([49, 50, 53]);
    });
  });
});
