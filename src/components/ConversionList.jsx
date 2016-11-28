import React, { PropTypes } from 'react';
import Convert from './ConvertContainer';

const ConversionList = ({
	count,
}) => {
	const childElements = [];
	for (let i = 0; i < count + 1; i++) {
		childElements.push(
			<div key={ i }>
				<hr />
				<Convert index={ i } />
			</div>
		);
	}
	return <div>{ childElements }</div>;
};

ConversionList.propTypes = {
	count: PropTypes.number,
};

ConversionList.defaultProps = {
	count: 0,
};

export default ConversionList;
