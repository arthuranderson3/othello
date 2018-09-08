import createScore from './createScore';

describe('createScore test suite', () => {
	it( 'default', () => {
		const { score } = createScore({ white: 2, black: 2 } );
		expect( score ).toHaveProperty('white');
		expect( score ).toHaveProperty('black');
		expect( score.white ).toEqual(2);
		expect( score.black ).toEqual(2);
	})
})
