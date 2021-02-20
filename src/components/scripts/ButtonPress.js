import React from 'react';

function ButtonPress(selection, state) {
	console.log('Button Press file - selection = ', selection);
	console.log('Button Press - state = ', state);
	const currentNum = state.number;

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

export { ButtonPress };
