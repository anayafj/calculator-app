import './NumberDisplay.css';
import React, { Component } from 'react';

class NumberDisplay extends Component {
	state = { number: 0 };
	render() {
		const displayNumber = this.props.displayNumber;
		return (
			<div className="number-display ui segment">
				<div className="number">{displayNumber}</div>
			</div>
		);
	}
}

export default NumberDisplay;
