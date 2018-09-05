import checkMove from './checkMove';
import constructGame from '../../model/game/constructGame';
import createGame from '../../model/game/createGame';
import getLastBoard from '../../model/state/getLastBoard';
import fs from 'fs';
import path from 'path';

describe('checkMove Test Suite', () => {
  it('checkMove#success', (done) => {
    const state = constructGame();
    console.log( 'checkMove:Success');
    checkMove(state, 29)
      .then(state => {
        expect(state.history.length).toBe(2);
        console.log( 'checkMove:Success#done');
        done();
      })
      .catch(err => { console.error( err ), done(err); });
  });

  it('checkMove#captured_1', (done) => {
    console.log("checkMove#captured_1");
    const game = constructGame();
    game.history[0].squaresObj =  {
                "1":"W",  "2":"W",  "3":"W",  "4":"W",  "5":"W",  "6":"W",  "7":"W",
                 "10":"W", "11":"W", "12":"W", "13":"W", "14":"W", "15":"W",
                 "18":"W", "19":"W", "20":"W", "21":"W", "22":"W", "23":"W",
      "24":"W", "25":"W", "26":"W", "27":"W", "28":"W", "29":"W", "30":"W", "31":"W",
      "32":"W", "33":"W", "34":"B", "35":"W", "36":"W", "37":"W", "38":"W", "39":"W",
      "40":"W", "41":"B", "42":"B", "43":"B", "44":"W", "45":"W", "46":"W", "47":"W",
      "48":"W", "49":"W", "50":"W", "51":"W", "52":"W", "53":"W", "54":"W",
      "56":"W", "57":"W", "58":"W", "59":"W", "60":"W", "61":"W", "62":"W"};
    game.player = 'B';
    const state = createGame( game );
    console.log( JSON.stringify(state) );
    checkMove( game, 16 )
      .then( state => {
        lastBoard = getLastBoard( state );
        // console.info( JSON.stringify( lastBoard) );
        expect( lastBoard.squaresObj ).toEqual( {
          squaresObj: {"1":"W","2":"W","3":"W","4":"W","5":"W","6":"W","7":"W",
          "10":"W", "11":"W", "12":"W", "13":"W", "14":"W", "15":"W",
          "16":"B", "18":"W", "19":"W", "20":"W", "21":"W", "22":"W", "23":"W",
          "24":"W", "25":"B", "26":"W", "27":"W", "28":"W", "29":"W", "30":"W", "31":"W",
          "32":"W", "33":"W", "34":"B", "35":"W", "36":"W", "37":"W", "38":"W", "39":"W",
          "40":"W", "41":"B", "42":"B", "43":"B", "44":"W", "45":"W", "46":"W", "47":"W",
          "48":"W", "49":"W", "50":"W", "51":"W", "52":"W", "53":"W", "54":"W",
          "56":"W", "57":"W", "58":"W", "59":"W", "60":"W", "61":"W", "62":"W"} });
        expect( lastBoard.player ).toEqual('W');
        expect( lastBoard.validSquares ).toEqual([8, 17]);
        done();
      })
      .catch( err => { console.error(err), done.fail(err); } );
  })
  it("checkMove#capture_2", done => {
    const file = fs.readFileSync(path.join(__dirname, "checkMove.test.capture2.json" ));
    const gameState = createGame( JSON.parse(file) );
    const debugBoard = getLastBoard(gameState);
    expect( debugBoard.player ).toEqual('B');
    expect( debugBoard.validSquares[0] ).toEqual(0);

    console.info(JSON.stringify(debugBoard));
    checkMove( gameState, 0 )
      .then( state => {
        const lastBoard = getLastBoard( state );
        expect( lastBoard.player ).toEqual('W');
        done();
      })
      .catch( err => { console.error(err), done.fail(err); });

  });
});
