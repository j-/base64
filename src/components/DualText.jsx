import React, { PropTypes } from 'react';
import SingleText from './SingleText';

const DualText = ({
	valueLeft,
	valueRight,
	onChangeLeft,
	onChangeRight,
	primaryLeft,
	primaryRight,
	dangerLeft,
	dangerRight,
	...props
}) => {
	return (
		<div { ...props }>
			<SingleText
				value={ valueLeft }
				onChange={ onChangeLeft }
				primary={ primaryLeft }
				danger={ dangerLeft }
			/>
			<SingleText
				value={ valueRight }
				onChange={ onChangeRight }
				primary={ primaryRight }
				danger={ dangerRight }
			/>
		</div>
	);
};

DualText.propTypes = {
	valueLeft: PropTypes.string,
	valueRight: PropTypes.string,
	onChangeLeft: PropTypes.func,
	onChangeRight: PropTypes.func,
	primaryLeft: PropTypes.bool,
	primaryRight: PropTypes.bool,
	dangerLeft: PropTypes.bool,
	dangerRight: PropTypes.bool,
};

export default DualText;
