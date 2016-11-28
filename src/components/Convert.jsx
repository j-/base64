import React, { Component } from 'react';

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
			<div>
				<textarea readOnly value={ fromValue } />
				<textarea readOnly value={ toValue } />
			</div>
		);
	}
}
