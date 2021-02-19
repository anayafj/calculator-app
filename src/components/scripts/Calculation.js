import React from 'react';

const padNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const padOperators = ['AC', '+/-', '%', '÷', 'x', '-', '+', '.', '='];
// let calculateEquation = false;

function Calculation(equation) {
	console.log('Make Calculation called', equation);
	// console.log('Calculation this - ', this);
	// console.log('Equation State - ', this.state);
	// Calculation(this.state);
	// calculateEquation = false;
	let result = 0;

	const checkEquationToUse = (operandIndex, number) => {
		// console.log('operandIndex = ', operandIndex);
		// console.log('number = ', number);
		switch (operandIndex) {
			case 3:
				console.log(' operand = DIVIDE');
				result = divideNumbers(result, number);
				break;
			case 4:
				console.log(' operand = MULTIPLY');
				result = multiplyNumbers(result, number);
				break;
			case 5:
				console.log(' operand = SUBTRACT');
				result = subtractNumbers(result, number);
				break;
			case 6:
				console.log(' operand = ADD');
				result = addNumbers(result, number);
				break;
			default:
				console.log('Ready for Result');
				break;
		}
	};

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

	for (let i = 0; i < equation.numbers.length; i++) {
		// console.log(i);
		if (i === 0) {
			result = Number(equation.numbers[i]);
		} else if (i === equation.operators.length) {
			break;
		}

		checkEquationToUse(
			padOperators.indexOf(equation.operators[i]),
			Number(equation.numbers[i + 1]),
		);
	}

	console.log('Equation Solved = ', result);
	// this.displayCalculatedResults(result);
	return result;
}

function onCal(equation) {
	console.log('Calculate button hit');
	return;
}

export { Calculation, onCal, padNumbers, padOperators };
