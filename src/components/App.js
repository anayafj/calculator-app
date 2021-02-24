import './App.css';
import React, { Component } from 'react';

import { calculateEquation } from './scripts/ConstantVariables';
import Calculation from './scripts/Calculation';
// import {
// 	Calculation,
// 	padNumbers,
// 	padOperators,
// 	calculateEquation,
// 	operatorSelected,
// } from './scripts/Calculation';
import { ButtonPress } from './scripts/ButtonPress';
import NumberDisplay from './NumberDisplay';
import NumberPad from './NumberPad';

// const padNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const padOperators = ['AC', '+/-', '%', '÷', 'x', '-', '+', '.', '='];
// let operatorSelected = false;
// let calculateEquation = false;

class App extends Component {
	state = {
		numbers: [],
		operators: [],
		number: '0',
	};

	buttonSelected = (selection) => {
		ButtonPress(selection, this.state, this.changeState);
	};

	changeState = (state, variable) => {
		console.log('Change state ---- state = ', state);
		console.log('Change state ---- variable = ', variable);

		switch (state) {
			case 'number':
				this.setState({ number: variable });
				break;
		}
	};

	// buttonSelected = (selection) => {
	// 	// console.log('Button selected = ', selection);
	// 	// console.log('operatorsSelected = ', operatorSelected);
	// 	ButtonPress(selection);

	// 	const currentNum = this.state.number;

	// 	if (!isNaN(Number(selection))) {
	// 		// console.log('Yes it is a number');

	// 		// check if first number is 0. If so replace.
	// 		if (Number(currentNum) == 0 && currentNum.length <= 1) {
	// 			if (operatorSelected) operatorSelected = false;
	// 			this.setState({ number: selection });
	// 		} else {
	// 			// look to see if new number needs to start
	// 			if (operatorSelected) {
	// 				// new number. just set
	// 				this.setState({ number: selection });
	// 				operatorSelected = false;
	// 			} else {
	// 				// if number then add to end of state number
	// 				this.setState({ number: currentNum.concat(selection) });
	// 			}
	// 		}
	// 	} else {
	// 		const operatorIndex = padOperators.indexOf(selection);
	// 		if (operatorSelected) {
	// 			if (operatorIndex == 0 || operatorIndex == 7) {
	// 				// check if operator is special
	// 				switch (operatorIndex) {
	// 					case 0:
	// 						// AC
	// 						this.setState({
	// 							numbers: [],
	// 							operators: [],
	// 							number: '0',
	// 						});
	// 						break;
	// 					case 7:
	// 						// .
	// 						if (currentNum.indexOf('.') === -1)
	// 							this.setState({ number: currentNum.concat(selection) });
	// 						break;
	// 				}
	// 			}
	// 			operatorSelected = false;
	// 			return;
	// 		}

	// 		// check if operator is special
	// 		switch (padOperators.indexOf(selection)) {
	// 			case 0:
	// 				// AC
	// 				this.setState({
	// 					numbers: [],
	// 					operators: [],
	// 					number: '0',
	// 				});
	// 				break;
	// 			case 1:
	// 				// +/-
	// 				this.setState({ number: String(Number(currentNum) * -1) });
	// 				break;
	// 			case 2:
	// 				// %
	// 				if (currentNum.indexOf('.') === -1)
	// 					this.setState({ number: String(currentNum / 100) });
	// 				break;
	// 			case 7:
	// 				// .
	// 				if (currentNum.indexOf('.') === -1)
	// 					this.setState({ number: currentNum.concat(selection) });
	// 				break;
	// 			case 8:
	// 				console.log('Calculate');

	// 				calculateEquation = true;
	// 				this.setState((state) => {
	// 					const numbers = [...state.numbers, state.number];
	// 					return { numbers };
	// 				});
	// 				break;
	// 			default:
	// 				// console.log('Default');
	// 				// all other operators: ÷, x, -, +
	// 				operatorSelected = true;

	// 				this.setState((state) => {
	// 					const numbers = state.numbers.concat(currentNum);
	// 					const operators = state.operators.concat(selection);

	// 					return {
	// 						numbers,
	// 						operators,
	// 					};
	// 				});
	// 				break;
	// 		}
	// 	}
	// };

	// onButtonPressed = (selection) => {
	// 	console.log('Number selected', selection);
	// };

	// Get results and change state to display ------
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
			Calculation(this.state, this.displayCalculatedResults);
		}
	}

	render() {
		return (
			<div className="app-container">
				<NumberDisplay displayNumber={this.state.number} />
				<NumberPad
					// padNum={padNumbers}
					// padOper={padOperators}
					buttonSelected={this.buttonSelected}
					// changeState={this.changeState}
					// buttonSelected={ButtonPress}
					// state={this.state}
				/>
			</div>
		);
	}
}

export default App;
