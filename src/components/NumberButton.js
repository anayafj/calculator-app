import '../stylesheets/components/NumberButton.scss';
import React, { Component } from 'react';

class NumberButton extends Component {
	buttonClicked = (e) => {
		e.preventDefault();
		this.props.onButtonPress(e.target.id);
	};

	componentDidUpdate() {}

	render() {
		const { name } = this.props;
		const classNameGrow = 'itemGrow';
		const classNameOperand = 'operand';
		const classNameHeader = 'topOperands';
		let className = '';

		if (name === 0) {
			console.log('name = ', name);
			className = classNameGrow;
		}

		return (
			<button
				type="button"
				className={className}
				id={name}
				onClick={this.buttonClicked}
			>
				{name}
			</button>
		);
	}
}

export default NumberButton;
