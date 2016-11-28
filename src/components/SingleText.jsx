import React, { PropTypes } from 'react';
import classNames from 'classnames';

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
			value={ value || '' }
			{ ...props }
		/>
	);
};

SingleText.propTypes = {
	primary: PropTypes.bool,
	danger: PropTypes.bool,
	onChange: PropTypes.func,
	value: PropTypes.string,
};

SingleText.defaultProps = {
	primary: false,
	danger: false,
};

export default SingleText;
