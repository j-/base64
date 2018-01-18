import React from 'react';
import PropTypes from 'prop-types';

export default class FocusableTextarea extends React.Component {
	componentWillReceiveProps (props) {
		if (props.autoFocus) {
			this.textarea.focus();
		}
	}

	render () {
		return <textarea ref={ (el) => this.textarea = el } { ...this.props } />;
	}
}

FocusableTextarea.propTypes = {
	autoFocus: PropTypes.any,
};

FocusableTextarea.defaultProps = {
	autoFocus: false,
};
