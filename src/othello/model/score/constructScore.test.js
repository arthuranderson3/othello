import constructScore from './constructScore';

describe('constructScore suite', () => {
	it('default', () => {
		const { score } = constructScore( 2, 3 );
		expect( score.white ).toEqual(2);
		expect( score.black ).toEqual(3);
	})
})
