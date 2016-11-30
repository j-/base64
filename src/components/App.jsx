import React, { Component, PropTypes } from 'react';
import ConversionList from './ConversionListContainer';

export default class App extends Component {
	constructor (props) {
		super(props);
		this.handlePaste = this.handlePaste.bind(this);
		this.handleKeypress = this.handleKeypress.bind(this);
	}

	componentDidMount () {
		window.addEventListener('paste', this.handlePaste);
		window.addEventListener('keypress', this.handleKeypress);
	}

	componentWillUnmount () {
		window.removeEventListener('paste', this.handlePaste);
		window.removeEventListener('keypress', this.handleKeypress);
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

	handleKeypress (e) {
		this.props.onKeypress(e.key);
	}

	render () {
		return (
			<div className="app">
				<h1>Base 64 Encode/Decode</h1>
				<ConversionList />
			</div>
		);
	}
}

App.propTypes = {
	onPaste: PropTypes.func.isRequired,
	onKeypress: PropTypes.func.isRequired,
};
