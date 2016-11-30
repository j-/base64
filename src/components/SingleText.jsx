import React, { PropTypes } from 'react';
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
		<textarea
			className={ className }
			onChange={ (e) => onChange(e.target.value) }
			onPaste={ stopPropagation }
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
