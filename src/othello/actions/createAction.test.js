import createAction from './createAction';

describe('createAction test suite', () => {
	let type;
	let payload;
	let action;
	beforeAll( () => {
		action = createAction( 'MAKE_MY_DAY', { some:'object', defined:'here' } );
		type = action.type;
		payload = action.payload;
	});
	it( 'action.type', () => {
		expect( action ).toHaveProperty('type');
	});
	it( 'action.payload', () => {
		expect( action ).toHaveProperty('payload');
	});
	it( 'type#MAKE_MY_DAY', () => {
		expect( type ).toEqual( 'MAKE_MY_DAY' );
	});
	it( 'payload.some', () => {
		expect( payload ).toHaveProperty( 'some' );
	});
	it( 'payload.defined', () => {
		expect( payload ).toHaveProperty( 'defined' );
	});
	it( 'payload.some=object', () => {
		expect( payload.some).toEqual('object');
	});
	it('payload.defined=here', () => {
		expect(payload.defined).toEqual('here');
	});
})
