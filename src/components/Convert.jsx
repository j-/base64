import React, { Component } from 'react';
import DualText from './DualText';

export default class Convert extends Component {
	constructor (props) {
		super(props);
		this.state = {
			fromValue: 'aGVsbG8gd29ybGQ=',
		};
	}

	render () {
		const { fromValue } = this.state;
		const toValue = atob(fromValue);
		return (
			<DualText
				valueLeft={ fromValue }
				valueRight={ toValue }
				primaryLeft
			/>
		);
	}
}
