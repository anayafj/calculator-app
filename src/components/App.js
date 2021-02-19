import './App.css';
import React, { Component } from 'react';

import {
	Calculation,
	onCal,
	padNumbers,
	padOperators,
} from './scripts/Calculation';
import NumberDisplay from './NumberDisplay';
import NumberPad from './NumberPad';

// const padNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const padOperators = ['AC', '+/-', '%', '÷', 'x', '-', '+', '.', '='];
let operatorSelected = false;
let calculateEquation = false;
// let newEquation = true;

class App extends Component {
	state = {
		numbers: [],
		operators: [],
		number: '0',
	};

	buttonSelected = (selection) => {
		// console.log('Button selected = ', selection);
		// console.log('operatorsSelected = ', operatorSelected);

		const currentNum = this.state.number;

		if (!isNaN(Number(selection))) {
			// console.log('Yes it is a number');

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

					calculateEquation = true;
					this.setState((state) => {
						const numbers = [...state.numbers, state.number];
						return { numbers };
					});
					break;
				default:
					// console.log('Default');
					// all other operators: ÷, x, -, +
					operatorSelected = true;

					this.setState((state) => {
						const numbers = state.numbers.concat(currentNum);
						const operators = state.operators.concat(selection);

						return {
							numbers,
							operators,
						};
					});
					break;
			}
		}
	};

	onButtonPressed = (selection) => {
		console.log('Number selected', selection);
	};

	// onCalculation = () => {
	// 	console.log('Equation State - ', this.state);
	// 	Calculation(this.state);
	// 	calculateEquation = false;
	// 	let result = 0;

	// 	const checkEquationToUse = (operandIndex, number) => {
	// 		// console.log('operandIndex = ', operandIndex);
	// 		// console.log('number = ', number);
	// 		switch (operandIndex) {
	// 			case 3:
	// 				console.log(' operand = DIVIDE');
	// 				result = divideNumbers(result, number);
	// 				break;
	// 			case 4:
	// 				console.log(' operand = MULTIPLY');
	// 				result = multiplyNumbers(result, number);
	// 				break;
	// 			case 5:
	// 				console.log(' operand = SUBTRACT');
	// 				result = subtractNumbers(result, number);
	// 				break;
	// 			case 6:
	// 				console.log(' operand = ADD');
	// 				result = addNumbers(result, number);
	// 				break;
	// 			default:
	// 				console.log('Ready for Result');
	// 				break;
	// 		}
	// 	};

	// 	const addNumbers = (a, b) => {
	// 		return a + b;
	// 	};

	// 	const subtractNumbers = (a, b) => {
	// 		return a - b;
	// 	};

	// 	const divideNumbers = (a, b) => {
	// 		return a / b;
	// 	};

	// 	const multiplyNumbers = (a, b) => {
	// 		return a * b;
	// 	};

	// 	for (let i = 0; i < this.state.numbers.length; i++) {
	// 		console.log(i);
	// 		if (i === 0) {
	// 			result = Number(this.state.numbers[i]);
	// 		} else if (i === this.state.operators.length) {
	// 			break;
	// 		}

	// 		checkEquationToUse(
	// 			padOperators.indexOf(this.state.operators[i]),
	// 			Number(this.state.numbers[i + 1]),
	// 		);
	// 	}

	// 	console.log('Equation Solved = ', result);
	// 	this.displayCalculatedResults(result);
	// };

	onCalculation = (equation) => {
		console.log('onCalculation : equation = ', equation);
		this.displayCalculatedResults(Calculation(equation));
	};

	displayCalculatedResults = (results) => {
		console.log('Display results - ', results);
		// newEquation = true;
		this.setState({
			numbers: [],
			operators: [],
			number: String(results),
		});
	};

	componentDidUpdate() {
		console.log('State - ', this.state);

		// called only when '=' button pressed
		if (calculateEquation) {
			calculateEquation = false;
			this.onCalculation(this.state);
		}
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
