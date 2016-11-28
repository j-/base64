import React, { PropTypes } from 'react';

const FlexContainer = ({
	style,
	alignContent,
	alignItems,
	flexDirection,
	flexWrap,
	justifyContent,
	...props
}) => {
	const newStyle = {
		...style,
		display: 'flex',
		alignContent,
		alignItems,
		flexDirection,
		flexWrap,
		justifyContent,
	};
	return <div style={ newStyle } { ...props } />;
};

FlexContainer.propTypes = {
	style: PropTypes.object,
	alignContent: PropTypes.oneOf([
		'center',
		'flex-end',
		'flex-start',
		'space-around',
		'space-between',
		'stretch',
	]),
	alignItems: PropTypes.oneOf([
		'baseline',
		'center',
		'flex-end',
		'flex-start',
		'stretch',
	]),
	flexDirection: PropTypes.oneOf([
		'column',
		'column-reverse',
		'row',
		'row-reverse',
	]),
	flexWrap: PropTypes.oneOf([
		'nowrap',
		'wrap',
		'wrap-reverse',
	]),
	justifyContent: PropTypes.oneOf([
		'center',
		'flex-end',
		'flex-start',
		'space-around',
		'space-between',
	]),
};

export default FlexContainer;
