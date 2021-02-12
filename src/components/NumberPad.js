import './NumberPad.css';
import React, { Component } from 'react';

import NumberButton from './NumberButton';

class NumberPad extends Component {
	onButtonPress = (e) => {
		console.log('Button Pressed');
	};

	render() {
		const padNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
		const padOperators = ['clear', '-', '%', '/', '*', '-', '+', '.', '='];

		return (
			<div className="number-pad">
				<div className="row">
					<NumberButton
						name={padOperators[0]}
						onButtonPress={this.onButtonPress}
					/>
					<NumberButton name={padOperators[1]} />
					<NumberButton name={padOperators[2]} />
					<NumberButton name={padOperators[3]} />
				</div>
				<div className="row">
					<NumberButton name={padNumbers[7]} />
					<NumberButton name={padNumbers[8]} />
					<NumberButton name={padNumbers[9]} />
					<NumberButton name={padOperators[4]} />
				</div>
				<div className="row">
					<NumberButton name={padNumbers[4]} />
					<NumberButton name={padNumbers[5]} />
					<NumberButton name={padNumbers[6]} />
					<NumberButton name={padOperators[5]} />
				</div>
				<div className="row">
					<NumberButton name={padNumbers[1]} />
					<NumberButton name={padNumbers[2]} />
					<NumberButton name={padNumbers[3]} />
					<NumberButton name={padOperators[6]} />
				</div>
				<div className="row">
					<NumberButton name={padNumbers[0]} />
					<NumberButton name={padOperators[7]} />
					<NumberButton name={padOperators[8]} />
				</div>
			</div>
		);
	}
}

export default NumberPad;
