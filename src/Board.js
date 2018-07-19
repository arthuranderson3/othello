import _ from 'lodash';
import React, { Component } from 'react';
import BoardRow from './BoardRow';
import './Board.css';

class Board extends Component {
	render() { 
		const rowSquares = _.chunk( this.props.squares, 8 );
		const board = rowSquares.map( ( squares, idx ) => {
												return( 
													<BoardRow key={idx}
																	rowid={idx} 
																	squares={squares}
																	onClick={(i) => this.props.onClick(i) } /> 
													);
									});	
		return (<div>{ board }</div>);
	}
}

export default Board;