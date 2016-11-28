import React, { Component } from 'react';
import DualText from './DualText';

export default class Convert extends Component {
	constructor (props) {
		super(props);
		this.state = {
			valueLeft: '',
			valueRight: '',
			calculateLeft: false,
			calculateRight: false,
		};
		this.handleChangeLeft = this.handleChangeLeft.bind(this);
		this.handleChangeRight = this.handleChangeRight.bind(this);
	}

	handleChangeLeft (valueLeft) {
		this.setState({
			valueLeft,
			calculateLeft: false,
			calculateRight: true,
		});
	}

	handleChangeRight (valueRight) {
		this.setState({
			valueRight,
			calculateLeft: true,
			calculateRight: false,
		});
	}

	getValueLeft () {
		if (this.state.calculateLeft) {
			return atob(this.state.valueRight);
		}
		return this.state.valueLeft;
	}

	getValueRight () {
		if (this.state.calculateRight) {
			return btoa(this.state.valueLeft);
		}
		return this.state.valueRight;
	}

	render () {
		const valueLeft = this.getValueLeft();
		const valueRight = this.getValueRight();
		const { calculateLeft, calculateRight } = this.state;
		return (
			<DualText
				valueLeft={ valueLeft }
				onChangeLeft={ this.handleChangeLeft }
				placeholderLeft="Enter text&hellip;"

				valueRight={ valueRight }
				onChangeRight={ this.handleChangeRight }
				placeholderRight="Enter base 64&hellip;"

				primaryLeft={ calculateRight }
				primaryRight={ calculateLeft }
			/>
		);
	}
}
