import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

export default class FocusableTextarea extends Component {
	componentWillReceiveProps (props) {
		if (props.autoFocus) {
			ReactDOM.findDOMNode(this.refs.textarea).focus();
		}
	}

	render () {
		return <textarea ref="textarea" { ...this.props } />;
	}
}

FocusableTextarea.propTypes = {
	autoFocus: PropTypes.any,
};

FocusableTextarea.defaultProps = {
	autoFocus: false,
};
