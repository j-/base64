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
			return btoa(this.state.valueRight);
		}
		return this.state.valueLeft;
	}

	getValueRight () {
		if (this.state.calculateRight) {
			return atob(this.state.valueLeft);
		}
		return this.state.valueRight;
	}

	render () {
		const valueLeft = this.getValueLeft();
		const valueRight = this.getValueRight();
		return (
			<DualText
				valueLeft={ valueLeft }
				onChangeLeft={ this.handleChangeLeft }
				valueRight={ valueRight }
				onChangeRight={ this.handleChangeRight }
				primaryLeft
			/>
		);
	}
}
