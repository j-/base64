import React, { Component, PropTypes } from 'react';
import Ribbon from './Ribbon';
import ConversionList from './ConversionListContainer';

export default class App extends Component {
	constructor (props) {
		super(props);
		this.handlePaste = this.handlePaste.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	componentDidMount () {
		window.addEventListener('paste', this.handlePaste);
		window.addEventListener('keypress', this.handleKeyPress);
	}

	componentWillUnmount () {
		window.removeEventListener('paste', this.handlePaste);
		window.removeEventListener('keypress', this.handleKeyPress);
	}

	handlePaste (e) {
		try {
			const clipboard = e.clipboardData;
			const data = clipboard.getData(clipboard.items[0].type);
			this.props.onPaste(data);
		} catch (err) {
			// Ignore errors
		}
	}

	handleKeyPress (e) {
		if (e.key === 'Enter') {
			// Ignore Enter key presses
			return;
		}
		this.props.onKeyPress(e.key);
	}

	render () {
		return (
			<div className="app">
				<h1>Base 64 Encode/Decode</h1>
				<Ribbon />
				<ConversionList />
			</div>
		);
	}
}

App.propTypes = {
	onPaste: PropTypes.func.isRequired,
	onKeyPress: PropTypes.func.isRequired,
};
