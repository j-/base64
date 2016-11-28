import React, { Component } from 'react';
import DualText from './DualText';

export default class Convert extends Component {
	constructor (props) {
		super(props);
		this.state = {
			valueText: null,
			valueBase64: null,
			calculatedText: null,
			calculatedBase64: null,
			invalidText: false,
			invalidBase64: false,
		};
		this.setConversionText = this.setConversionText.bind(this);
		this.setConversionBase64 = this.setConversionBase64.bind(this);
	}

	setConversionText (valueText) {
		let calculatedBase64;
		let didError = false;
		try {
			calculatedBase64 = btoa(valueText);
		} catch (err) {
			didError = true;
		}
		this.setState({
			valueText: valueText,
			valueBase64: null,
			calculatedText: null,
			calculatedBase64: calculatedBase64,
			invalidText: didError,
			invalidBase64: false,
		});
	}

	setConversionBase64 (valueBase64) {
		let calculatedText;
		let didError = false;
		try {
			calculatedText = atob(valueBase64);
		} catch (err) {
			didError = true;
		}
		this.setState({
			valueText: null,
			valueBase64: valueBase64,
			calculatedText: calculatedText,
			calculatedBase64: null,
			invalidText: false,
			invalidBase64: didError,
		});
	}

	render () {
		const {
			valueText,
			valueBase64,
			calculatedText,
			calculatedBase64,
			invalidText,
			invalidBase64,
		} = this.state;
		return (
			<DualText
				// Text props
				valueLeft={ calculatedText || valueText }
				onChangeLeft={ this.setConversionText }
				placeholderLeft="Enter text&hellip;"
				primaryLeft={ calculatedBase64 }
				dangerLeft={ invalidText }
				// Base 64 props
				valueRight={ calculatedBase64 || valueBase64 }
				onChangeRight={ this.setConversionBase64 }
				placeholderRight="Enter base 64&hellip;"
				primaryRight={ calculatedText }
				dangerRight={ invalidBase64 }
			/>
		);
	}
}
