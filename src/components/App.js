import React, { Component } from 'react';

import NumberDisplay from './NumberDisplay';
import NumberPad from './NumberPad';

class App extends Component {
	state = {
		numbers: [],
		opertaters: [],
		number: 0,
	};

	onButtonPressed = (selection) => {
		console.log('Number selected', selection);
	};

	onCalculation = (num) => {
		console.log('Equation Solved', num);
	};

	render() {
		return (
			<div className="ui container">
				<NumberDisplay displayNumber={this.state.number} />
				<NumberPad />
			</div>
		);
	}
}

export default App;
