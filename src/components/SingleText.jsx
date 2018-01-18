import React from 'react';
import PropTypes from 'prop-types';
import FocusableTextarea from './FocusableTextarea';
import classNames from 'classnames';

const stopPropagation = (e) => {
	// Allow event to be handled by the component
	// only if it is actually in focus
	if (e.target === document.activeElement) {
		e.stopPropagation();
	}
};

const SingleText = ({
	primary,
	danger,
	onChange,
	value,
	...props
}) => {
	const className = classNames('pt-input', {
		'pt-intent-danger': danger,
		'pt-intent-primary': primary && !danger,
	});
	return (
		<FocusableTextarea
			className={ className }
			onChange={ (e) => onChange(e.currentTarget.value) }
			onPaste={ stopPropagation }
			onKeyPress={ stopPropagation }
			value={ value || '' }
			{ ...props }
		/>
	);
};

SingleText.propTypes = {
	primary: PropTypes.any,
	danger: PropTypes.any,
	onChange: PropTypes.func,
	value: PropTypes.string,
};

SingleText.defaultProps = {
	primary: false,
	danger: false,
};

export default SingleText;
