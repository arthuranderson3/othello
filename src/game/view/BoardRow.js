import React, { Component } from 'react';
import Square from './Square';

export default class BoardRow extends Component {
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
		return ( <div className='d-flex flex-row mb-8 ' rowid={rowid} >
							 	{squares}
							</div> );
	}
};
