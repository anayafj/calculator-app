import './App.css';
import React, { Component } from 'react';

import NumberDisplay from './NumberDisplay';
import NumberPad from './NumberPad';

const padNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const padOperators = ['AC', '+/-', '%', '÷', 'x', '-', '+', '.', '='];
let operatorSelected = false;

class App extends Component {
	state = {
		numbers: [],
		operators: [],
		number: '0',
	};

	buttonSelected = (selection) => {
		// console.log('Button selected = ', selection);
		console.log('operatorsSelected = ', operatorSelected);

		const currentNum = this.state.number;

		if (!isNaN(Number(selection))) {
			console.log('Yes it is a number');

			// check if first number is 0. If so replace.
			if (Number(currentNum) == 0 && currentNum.length <= 1) {
				if (operatorSelected) operatorSelected = false;
				this.setState({ number: selection });
			} else {
				// look to see if new number needs to start
				if (operatorSelected) {
					// new number. just set
					this.setState({ number: selection });
					operatorSelected = false;
				} else {
					// if number then add to end of state number
					this.setState({ number: currentNum.concat(selection) });
				}
			}
		} else {
			const operatorIndex = padOperators.indexOf(selection);
			if (operatorSelected) {
				if (operatorIndex == 0 || operatorIndex == 7) {
					// check if operator is special
					switch (operatorIndex) {
						case 0:
							// AC
							this.setState({
								numbers: [],
								operators: [],
								number: '0',
							});
							break;
						case 7:
							// .
							if (currentNum.indexOf('.') === -1)
								this.setState({ number: currentNum.concat(selection) });
							break;
					}
				}
				operatorSelected = false;
				return;
			}

			// check if operator is special
			switch (padOperators.indexOf(selection)) {
				case 0:
					// AC
					this.setState({
						numbers: [],
						operators: [],
						number: '0',
					});
					break;
				case 1:
					// +/-
					this.setState({ number: String(Number(currentNum) * -1) });
					break;
				case 2:
					// %
					if (currentNum.indexOf('.') === -1)
						this.setState({ number: String(currentNum / 100) });
					break;
				case 7:
					// .
					if (currentNum.indexOf('.') === -1)
						this.setState({ number: currentNum.concat(selection) });
					break;
				case 8:
					console.log('Calculate');
					break;
				default:
					console.log('Default');
					// all other operators: ÷, x, -, +
					operatorSelected = true;
					this.setState({
						numbers: [].push(currentNum),
						operators: [].push(selection),
					});
			}
		}
	};

	onButtonPressed = (selection) => {
		console.log('Number selected', selection);
	};

	onCalculation = (num) => {
		console.log('Equation Solved', num);
	};

	componentDidUpdate() {
		console.log('State of number = ', this.state.number);
		console.log('State - ', this.state);
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
