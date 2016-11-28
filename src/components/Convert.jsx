import React, { Component } from 'react';
import DualText from './DualText';

export default class Convert extends Component {
	constructor (props) {
		super(props);
		this.state = {
			valueText: '',
			valueBase64: '',
			calculateText: false,
			calculateBase64: false,
		};
		this.handleChangeText = this.handleChangeText.bind(this);
		this.handleChangeBase64 = this.handleChangeBase64.bind(this);
	}

	handleChangeText (valueText) {
		this.setState({
			valueText,
			calculateText: false,
			calculateBase64: true,
		});
	}

	handleChangeBase64 (valueBase64) {
		this.setState({
			valueBase64,
			calculateText: true,
			calculateBase64: false,
		});
	}

	getValueText () {
		if (this.state.calculateText) {
			return atob(this.state.valueBase64);
		}
		return this.state.valueText;
	}

	getValueBase64 () {
		if (this.state.calculateBase64) {
			return btoa(this.state.valueText);
		}
		return this.state.valueBase64;
	}

	render () {
		const valueText = this.getValueText();
		const valueBase64 = this.getValueBase64();
		const { calculateText, calculateBase64 } = this.state;
		return (
			<DualText
				valueLeft={ valueText }
				onChangeLeft={ this.handleChangeText }
				placeholderLeft="Enter text&hellip;"

				valueRight={ valueBase64 }
				onChangeRight={ this.handleChangeBase64 }
				placeholderRight="Enter base 64&hellip;"

				primaryLeft={ calculateBase64 }
				primaryRight={ calculateText }
			/>
		);
	}
}
