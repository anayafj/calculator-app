import './App.css';
import React, { Component } from 'react';

import {
	calculateEquation,
	setCalculateEquation,
} from './scripts/ConstantVariables';
import Calculation from './scripts/Calculation';
import { ButtonPress } from './scripts/ButtonPress';
import NumberDisplay from './NumberDisplay';
import NumberPad from './NumberPad';

// const padOperators = ['AC', '+/-', '%', '÷', 'x', '-', '+', '.', '='];

class App extends Component {
	state = {
		numbers: [],
		operators: [],
		number: '0',
	};

	buttonSelected = (selection) => {
		ButtonPress(selection, this.state, this.changeState);
	};

	// Change state on button press ------
	changeState = (state, variable) => {
		switch (state) {
			case 'number':
				this.setState({ number: variable });
				break;
			case 'numbers':
				this.setState((state) => {
					const numbers = [...state.numbers, variable];
					return { numbers };
				});
				break;
			case 'operators':
				this.setState((state) => {
					const operators = [...state.operators, variable];
					return { operators };
				});
				break;
			case 'reset':
				this.setState({
					numbers: [],
					operators: [],
					number: '0',
				});
				break;
			default:
				console.log('changeState - ERROR');
				break;
		}
	};

	// Get results and change state to display ------
	displayCalculatedResults = (results) => {
		console.log('Display results - ', results);

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
			setCalculateEquation(false);
			Calculation(this.state, this.displayCalculatedResults);
		}
	}

	render() {
		return (
			<div className="app-container">
				<NumberDisplay displayNumber={this.state.number} />
				<NumberPad buttonSelected={this.buttonSelected} />
			</div>
		);
	}
}

export default App;
