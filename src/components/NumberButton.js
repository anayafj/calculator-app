import '../stylesheets/components/NumberButton.scss';
import React, { Component } from 'react';

class NumberButton extends Component {
	buttonClicked = (e) => {
		e.preventDefault();
		this.props.onButtonPress(e.target.id);
	};

	render() {
		const { name } = this.props;

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
