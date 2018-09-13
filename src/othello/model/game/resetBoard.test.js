import resetBoard from './resetBoard';
import constructGame from './constructGame';

describe('resetBoard test suite', () => {
  it('resetBoard#success', () => {
    const game = constructGame('resetBoardGame', 'resetter' );
    const reset = resetBoard( game );
    expect(reset).toEqual(game);
  });
});
