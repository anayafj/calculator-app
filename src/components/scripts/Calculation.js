import React from 'react';

import * as Constants from './ConstantVariables';
// const padNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const padOperators = ['AC', '+/-', '%', '÷', 'x', '-', '+', '.', '='];
// let result = null;
// let operatorSelected = false;
// let calculateEquation = false;

function Calculation(equation, displayCalculatedResults) {
	console.log('Make Calculation called', equation);

	Constants.result = null; // reset results to null

	for (let i = 0; i < equation.numbers.length; i++) {
		if (i === 0) {
			Constants.result = Number(equation.numbers[i]);
		} else if (i === equation.operators.length) {
			break;
		}

		checkEquationToUse(
			Constants.padOperators.indexOf(equation.operators[i]),
			// padOperators.indexOf(equation.operators[i]),
			Number(equation.numbers[i + 1]),
		);
	}

	displayCalculatedResults(Constants.result);
}

// function to see what type of equation to use
const checkEquationToUse = (operandIndex, number) => {
	switch (operandIndex) {
		case 3:
			// console.log(' operand = DIVIDE');
			Constants.result = divideNumbers(Constants.result, number);
			break;
		case 4:
			// console.log(' operand = MULTIPLY');
			Constants.result = multiplyNumbers(Constants.result, number);
			break;
		case 5:
			// console.log(' operand = SUBTRACT');
			Constants.result = subtractNumbers(Constants.result, number);
			break;
		case 6:
			// console.log(' operand = ADD');
			Constants.result = addNumbers(Constants.result, number);
			break;
		default:
			console.log('Ready for Result');
			break;
	}
};

// Equations ------------------------>> //
const addNumbers = (a, b) => {
	return a + b;
};

const subtractNumbers = (a, b) => {
	return a - b;
};

const divideNumbers = (a, b) => {
	return a / b;
};

const multiplyNumbers = (a, b) => {
	return a * b;
};
// Equations ------------------------<< //

// export {
// 	Calculation,
// 	padNumbers,
// 	padOperators,
// 	calculateEquation,
// 	operatorSelected,
// };

export default Calculation;
