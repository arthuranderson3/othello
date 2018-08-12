import { boardNavigation } from './_boardNavigation';

const _top 					= boardNavigation( -1,  0 );
const _topLeft 			= boardNavigation( -1, -1 );
const _topRight 		= boardNavigation( -1,  1 );
const _right 				= boardNavigation(  0,  1 );
const _left 				= boardNavigation(  0, -1 );
const _bottom 			= boardNavigation(  1,  0 );
const _bottomRight 	= boardNavigation(  1,  1 );
const _bottomLeft  	= boardNavigation(  1, -1 );

export function top( i ) 					{ return _top(i); }
export function topLeft( i ) 			{ return _topLeft(i); }
export function topRight( i ) 		{ return _topRight(i); }
export function right( i ) 				{ return _right(i); }
export function left( i ) 				{ return _left(i); }
export function bottom( i ) 			{ return _bottom(i); }
export function bottomRight( i ) 	{ return _bottomRight(i); }
export function bottomLeft( i ) 	{ return _bottomLeft(i); }