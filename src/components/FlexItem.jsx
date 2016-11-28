import React, { PropTypes } from 'react';

const FlexItem = ({
	alignSelf,
	flexBasis,
	flexGrow,
	flexShrink,
	flexOrder,
	...props
}) => {
	const style = {
		alignSelf,
		flexBasis,
		flexGrow,
		flexShrink,
		flexOrder,
	};
	return <div style={ style } { ...props } />;
};

FlexItem.propTypes = {
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
