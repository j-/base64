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
				<textarea className="pt-input pt-intent-primary" readOnly value={ fromValue } />
				<textarea className="pt-input" readOnly value={ toValue } />
			</div>
		);
	}
}
