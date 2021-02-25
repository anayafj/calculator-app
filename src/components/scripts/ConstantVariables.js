export const padNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
export const padOperators = ['AC', '+/-', '%', '÷', 'x', '-', '+', '.', '='];
export let result = null;
export let operatorSelected = false;
export let calculateEquation = false;

export const setResults = (newResults) => {
	console.log('Updating results');
	result = newResults;
};

export const setOperatorSelected = (boolean) => {
	console.log('Updating setOperatorSelected = ', boolean);
	operatorSelected = boolean;
};

export const setCalculateEquation = (boolean) => {
	console.log('Updating calculateEquation = ', boolean);
	calculateEquation = boolean;
};
