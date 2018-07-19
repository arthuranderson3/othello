import React, { Component } from 'react';

class Square extends Component {
	render() {
		let classes = 'square';
		if( this.props.value ) {
			if( this.props.value === 'W') {
				classes += ' square-white';
			} else {
				classes += ' square-black';
			}
		}
		return ( <div class={classes} rowid={this.props.rowid} colid={this.props.colid} /> );
	}
}

export default Square;