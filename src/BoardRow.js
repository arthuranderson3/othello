import React, { Component } from 'react';
import Square from './Square';

class BoardRow extends Component {
	render() {

		const rowid = this.props.rowid;
		const squares = this.props.squares.map( ( square, idx ) => { 
							return ( 
								<Square 
										key={(rowid * 8) + idx} 
										value={square} 
										rowid={rowid} 
										colid={idx} 
										onClick={(i) => this.props.onClick(i)} 
										/> );
							});
		return ( <div className='board-row' rowid={rowid} >
							 	{squares}
							</div> );
	}
};

export default BoardRow;