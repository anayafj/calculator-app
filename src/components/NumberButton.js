import './NumberButton.css';
import React, { Component } from 'react';

class NumberButton extends Component {
	buttonClicked = (e) => {
		e.preventDefault();
		// console.log('Button clicked now', e.target.id);
		this.props.onButtonPress(e.target.id);
	};

	render() {
		const { name, onButtonPress } = this.props;

		return (
			<div className="pad-button">
				<button className="ui button" id={name} onClick={this.buttonClicked}>
					{name}
				</button>
			</div>
		);
	}
}

export default NumberButton;
