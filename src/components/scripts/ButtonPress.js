import React from 'react';

import * as Constants from './ConstantVariables';
// const padNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const padOperators = ['AC', '+/-', '%', '÷', 'x', '-', '+', '.', '='];
// let result = null;
// let operatorSelected = false;
// let calculateEquation = false;

function ButtonPress(selection, state, changeState) {
	console.log('Button Press file - selection = ', selection);
	const currentNum = state.number;

	if (!isNaN(Number(selection))) {
		updateForNumber(currentNum, selection, changeState);
	} else {
		updateForOperand(currentNum, selection, changeState);
	}

	// if (!isNaN(Number(selection))) {
	// 	// console.log('Yes it is a number');

	// 	// check if first number is 0. If so replace.
	// 	if (Number(currentNum) == 0 && currentNum.length <= 1) {
	// 		if (operatorSelected) operatorSelected = false;
	// 		this.setState({ number: selection });
	// 	} else {
	// 		// look to see if new number needs to start
	// 		if (operatorSelected) {
	// 			// new number. just set
	// 			this.setState({ number: selection });
	// 			operatorSelected = false;
	// 		} else {
	// 			// if number then add to end of state number
	// 			this.setState({ number: currentNum.concat(selection) });
	// 		}
	// 	}
	// } else {
	// 	const operatorIndex = padOperators.indexOf(selection);
	// 	if (operatorSelected) {
	// 		if (operatorIndex == 0 || operatorIndex == 7) {
	// 			// check if operator is special
	// 			switch (operatorIndex) {
	// 				case 0:
	// 					// AC
	// 					this.setState({
	// 						numbers: [],
	// 						operators: [],
	// 						number: '0',
	// 					});
	// 					break;
	// 				case 7:
	// 					// .
	// 					if (currentNum.indexOf('.') === -1)
	// 						this.setState({ number: currentNum.concat(selection) });
	// 					break;
	// 			}
	// 		}
	// 		operatorSelected = false;
	// 		return;
	// 	}

	// 	// check if operator is special
	// 	switch (padOperators.indexOf(selection)) {
	// 		case 0:
	// 			// AC
	// 			this.setState({
	// 				numbers: [],
	// 				operators: [],
	// 				number: '0',
	// 			});
	// 			break;
	// 		case 1:
	// 			// +/-
	// 			this.setState({ number: String(Number(currentNum) * -1) });
	// 			break;
	// 		case 2:
	// 			// %
	// 			if (currentNum.indexOf('.') === -1)
	// 				this.setState({ number: String(currentNum / 100) });
	// 			break;
	// 		case 7:
	// 			// .
	// 			if (currentNum.indexOf('.') === -1)
	// 				this.setState({ number: currentNum.concat(selection) });
	// 			break;
	// 		case 8:
	// 			console.log('Calculate');

	// 			calculateEquation = true;
	// 			this.setState((state) => {
	// 				const numbers = [...state.numbers, state.number];
	// 				return { numbers };
	// 			});
	// 			break;
	// 		default:
	// 			// console.log('Default');
	// 			// all other operators: ÷, x, -, +
	// 			operatorSelected = true;

	// 			this.setState((state) => {
	// 				const numbers = state.numbers.concat(currentNum);
	// 				const operators = state.operators.concat(selection);

	// 				return {
	// 					numbers,
	// 					operators,
	// 				};
	// 			});
	// 			break;
	// 	}
	// }
}

// If button selected is a number
const updateForNumber = (currentNum, selection, changeState) => {
	console.log("It's a Number!");
	const currentNumber = Number(currentNum);

	// check if first number is 0. If so replace it unless selection is 0.
	if (currentNumber == 0 && currentNum.length <= 1) {
		if (Constants.operatorSelected) Constants.setOperatorSelected(false);
		console.log('Number is 0, replace it with selection');
		if (Number(selection) != currentNumber) changeState('number', selection);
	} else {
		// look to see if new number needs to start
		if (Constants.operatorSelected) {
			// new number. just set
			console.log(
				'**********    new number, replace 0 with selection  *********',
			);
			changeState('number', selection);
			Constants.setOperatorSelected(false);
		} else {
			// if number then add to end of state number
			console.log('concat to current number');
			changeState('number', currentNum.concat(selection));
		}
	}
};

// If button selected is a operator
const updateForOperand = (currentNum, selection, changeState) => {
	console.log("It's a Operand!");

	const operatorIndex = Constants.padOperators.indexOf(selection);
	Constants.setOperatorSelected(true);

	switch (operatorIndex) {
		case 0:
			Constants.setOperatorSelected(false);
			changeState('reset', null);
			break;
		case 1:
			// +/-
			Constants.setOperatorSelected(false);
			changeState('number', String(Number(currentNum) * -1));
			break;
		case 2:
			// %
			if (currentNum.indexOf('.') === -1) {
				// Constants.setOperatorSelected(false);
				changeState('number', String(currentNum / 100));
			}
			break;
		case 7:
			// .
			if (currentNum.indexOf('.') === -1) {
				Constants.setOperatorSelected(false);
				changeState('number', currentNum.concat(selection));
			}
			break;
		case 8:
			console.log('Calculate - currentNum = ', currentNum);

			// calculateEquation = true;
			// this.setState((state) => {
			// 	const numbers = [...state.numbers, state.number];
			// 	return { numbers };
			// });
			Constants.setCalculateEquation(true);
			changeState('numbers', currentNum);
			break;
		default:
			// console.log('Default');
			// all other operators: ÷, x, -, +

			changeState('numbers', currentNum);
			changeState('operators', String(selection));
			break;
	}
};

export { ButtonPress };
