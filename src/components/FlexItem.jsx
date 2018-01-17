import React from 'react';
import PropTypes from 'prop-types';

const FlexItem = ({
	style,
	alignSelf,
	flexBasis,
	flexGrow,
	flexShrink,
	flexOrder,
	...props
}) => {
	const newStyle = {
		...style,
		alignSelf,
		flexBasis,
		flexGrow,
		flexShrink,
		flexOrder,
	};
	return <div style={ newStyle } { ...props } />;
};

FlexItem.propTypes = {
	style: PropTypes.object,
	alignSelf: PropTypes.oneOf([
		'auto',
		'baseline',
		'center',
		'flex-end',
		'flex-start',
		'stretch',
	]),
	flexBasis: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
	]),
	flexGrow: PropTypes.number,
	flexShrink: PropTypes.number,
	flexOrder: PropTypes.number,
};

export default FlexItem;
