import '../stylesheets/components/NumberPad.scss';
import React, { Component } from 'react';

import { padNumbers, padOperators } from './scripts/ConstantVariables';
import NumberButton from './NumberButton';

class NumberPad extends Component {
	state = { clearBtn: padOperators[0] };

	onButtonPress = (e) => {
		this.props.buttonSelected(e);
	};

	render() {
		return (
			<div className="number-pad">
				<div className="row">
					<NumberButton
						// name={padOperators[0]}
						name={this.state.clearBtn}
						onButtonPress={this.onButtonPress}
					/>
					<NumberButton
						name={padOperators[1]}
						onButtonPress={this.onButtonPress}
					/>
					<NumberButton
						name={padOperators[2]}
						onButtonPress={this.onButtonPress}
					/>
					<NumberButton
						name={padOperators[3]}
						onButtonPress={this.onButtonPress}
					/>
				</div>
				<div className="row">
					<NumberButton
						name={padNumbers[7]}
						onButtonPress={this.onButtonPress}
					/>
					<NumberButton
						name={padNumbers[8]}
						onButtonPress={this.onButtonPress}
					/>
					<NumberButton
						name={padNumbers[9]}
						onButtonPress={this.onButtonPress}
					/>
					<NumberButton
						name={padOperators[4]}
						onButtonPress={this.onButtonPress}
					/>
				</div>
				<div className="row">
					<NumberButton
						name={padNumbers[4]}
						onButtonPress={this.onButtonPress}
					/>
					<NumberButton
						name={padNumbers[5]}
						onButtonPress={this.onButtonPress}
					/>
					<NumberButton
						name={padNumbers[6]}
						onButtonPress={this.onButtonPress}
					/>
					<NumberButton
						name={padOperators[5]}
						onButtonPress={this.onButtonPress}
					/>
				</div>
				<div className="row">
					<NumberButton
						name={padNumbers[1]}
						onButtonPress={this.onButtonPress}
					/>
					<NumberButton
						name={padNumbers[2]}
						onButtonPress={this.onButtonPress}
					/>
					<NumberButton
						name={padNumbers[3]}
						onButtonPress={this.onButtonPress}
					/>
					<NumberButton
						name={padOperators[6]}
						onButtonPress={this.onButtonPress}
					/>
				</div>
				<div className="row">
					<NumberButton
						name={padNumbers[0]}
						onButtonPress={this.onButtonPress}
					/>
					<NumberButton
						name={padOperators[7]}
						onButtonPress={this.onButtonPress}
					/>
					<NumberButton
						name={padOperators[8]}
						onButtonPress={this.onButtonPress}
					/>
				</div>
			</div>
		);
	}
}

export default NumberPad;
