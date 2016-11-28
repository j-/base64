import React, { PropTypes } from 'react';
import SingleText from './SingleText';

const DualText = ({
	valueLeft,
	valueRight,
	onChangeLeft,
	onChangeRight,
	...props
}) => {
	return (
		<div { ...props }>
			<SingleText value={ valueLeft } onChange={ onChangeLeft } />
			<SingleText value={ valueRight } onChange={ onChangeRight } />
		</div>
	);
};

DualText.propTypes = {
	valueLeft: PropTypes.string,
	valueRight: PropTypes.string,
	onChangeLeft: PropTypes.func,
	onChangeRight: PropTypes.func,
};

export default DualText;
