import './App.css';
import React, { Component } from 'react';

import NumberDisplay from './NumberDisplay';
import NumberPad from './NumberPad';

const padNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const padOperators = ['AC', '+/-', '%', '÷', 'x', '-', '+', '.', '='];

class App extends Component {
	state = {
		numbers: [],
		opertaters: [],
		number: '0',
	};

	buttonSelected = (selection) => {
		console.log('Button selected = ', selection);
		// console.log(Number(selection));
		const currentNum = this.state.number;

		if (!isNaN(Number(selection))) {
			console.log('Yes it is a number');

			// check if first number is 0. If so replace.
			if (Number(currentNum) == 0 && currentNum.length <= 1) {
				this.setState({ number: selection });
			} else {
				// if number then add to end of state number
				this.setState({ number: currentNum.concat(selection) });
			}
		} else {
			// check if operator is special
			switch (padOperators.indexOf(selection)) {
				case 0:
					console.log('CLEAR');
					break;
				case 1:
					console.log('Negative/positive');
					this.setState({ number: String(Number(currentNum) * -1) });
					break;
				case 2:
					console.log('%');
					break;
				case 7:
					console.log('.');
					// check if there is already a decimal. if so ignore
					if (currentNum.indexOf('.') === -1) {
						console.log('No decimal found. Add it');
						this.setState({ number: currentNum.concat(selection) });
					}
					break;
				case 8:
					console.log('Calculate');
					break;
				default:
					console.log('Default');
			}
			console.log('Not a number');
		}
	};

	onButtonPressed = (selection) => {
		console.log('Number selected', selection);
	};

	onCalculation = (num) => {
		console.log('Equation Solved', num);
	};

	componentDidUpdate() {
		console.log('Concat number = ', this.state.number);
	}

	render() {
		return (
			<div className="app-container">
				<NumberDisplay displayNumber={this.state.number} />
				<NumberPad
					padNum={padNumbers}
					padOper={padOperators}
					buttonSelected={this.buttonSelected}
				/>
			</div>
		);
	}
}

export default App;
