import React, { Component } from 'react';
import Square from './Square';

class BoardRow extends Component {
	render() {

		const rowid = this.props.rowid;
		const squares = this.props.squares.map( ( square, idx ) => { return ( <Square key={( rowid + 1) * ( idx + 1 )} value={square} rowid={rowid} colid={idx} /> ); })
		return ( <div class='board-row' rowid={rowid} >
							 	{squares}
							</div> );
	}
}

export default BoardRow;