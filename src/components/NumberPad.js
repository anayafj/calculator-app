import './NumberPad.css';
import React, { Component } from 'react';

import NumberButton from './NumberButton';

class NumberPad extends Component {
	// state = { num : null, operator: ''}

	onButtonPress = (e) => {
		this.props.buttonSelected(e);
	};

	render() {
		const { buttonSelected, padNum, padOper } = this.props;

		return (
			<div className="number-pad">
				<div className="row">
					<NumberButton name={padOper[0]} onButtonPress={this.onButtonPress} />
					<NumberButton name={padOper[1]} onButtonPress={this.onButtonPress} />
					<NumberButton name={padOper[2]} onButtonPress={this.onButtonPress} />
					<NumberButton name={padOper[3]} onButtonPress={this.onButtonPress} />
				</div>
				<div className="row">
					<NumberButton name={padNum[7]} onButtonPress={this.onButtonPress} />
					<NumberButton name={padNum[8]} onButtonPress={this.onButtonPress} />
					<NumberButton name={padNum[9]} onButtonPress={this.onButtonPress} />
					<NumberButton name={padOper[4]} onButtonPress={this.onButtonPress} />
				</div>
				<div className="row">
					<NumberButton name={padNum[4]} onButtonPress={this.onButtonPress} />
					<NumberButton name={padNum[5]} onButtonPress={this.onButtonPress} />
					<NumberButton name={padNum[6]} onButtonPress={this.onButtonPress} />
					<NumberButton name={padOper[5]} onButtonPress={this.onButtonPress} />
				</div>
				<div className="row">
					<NumberButton name={padNum[1]} onButtonPress={this.onButtonPress} />
					<NumberButton name={padNum[2]} onButtonPress={this.onButtonPress} />
					<NumberButton name={padNum[3]} onButtonPress={this.onButtonPress} />
					<NumberButton name={padOper[6]} onButtonPress={this.onButtonPress} />
				</div>
				<div className="row">
					<NumberButton name={padNum[0]} onButtonPress={this.onButtonPress} />
					<NumberButton name={padOper[7]} onButtonPress={this.onButtonPress} />
					<NumberButton name={padOper[8]} onButtonPress={this.onButtonPress} />
				</div>
			</div>
		);
	}
}

export default NumberPad;
