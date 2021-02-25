import * as Constants from './ConstantVariables';

function ButtonPress(selection, state, changeState) {
	console.log('Button Press file - selection = ', selection);
	const currentNum = state.number;

	if (!isNaN(Number(selection))) {
		updateForNumber(currentNum, selection, changeState);
	} else {
		updateForOperand(currentNum, selection, changeState);
	}
}

// If button selected is a number
const updateForNumber = (currentNum, selection, changeState) => {
	// console.log("It's a Number!");
	const currentNumber = Number(currentNum);

	// check if first number is 0. If so replace it unless selection is 0.
	if (currentNumber == 0 && currentNum.length <= 1) {
		console.log('Number is default 0, replace it with selection');
		if (Constants.operatorSelected) Constants.setOperatorSelected(false);
		if (Number(selection) != currentNumber) changeState('number', selection);
	} else {
		// look to see if new number needs to start
		if (Constants.operatorSelected) {
			// start a new number after operand selected.
			console.log('**  new number, replace 0 with selection  **');
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
	// console.log("It's a Operand!");

	const operatorIndex = Constants.padOperators.indexOf(selection);
	Constants.setOperatorSelected(false);

	switch (operatorIndex) {
		case 0:
			changeState('reset', null);
			break;
		case 1:
			// +/-
			changeState('number', String(Number(currentNum) * -1));
			break;
		case 2:
			// %
			if (currentNum.indexOf('.') === -1)
				changeState('number', String(currentNum / 100));
			break;
		case 7:
			// .
			if (currentNum.indexOf('.') === -1)
				changeState('number', currentNum.concat(selection));
			break;
		case 8:
			// console.log('Calculate - currentNum = ', currentNum);
			Constants.setOperatorSelected(true);
			Constants.setCalculateEquation(true);
			changeState('numbers', currentNum);
			break;
		default:
			// console.log('Default');
			// all other operators: ÷, x, -, +
			Constants.setOperatorSelected(true);
			changeState('numbers', currentNum);
			changeState('operators', String(selection));
			break;
	}
};

export { ButtonPress };
