import React, { PropTypes } from 'react';
import Convert from './ConvertContainer';
import ConversionActions from './ConversionActionsContainer';

const ConversionList = ({
	count,
}) => {
	const childElements = [];
	for (let i = 0; i < count + 1; i++) {
		childElements.push(
			<div key={ i }>
				<ConversionActions
					index={ i }
					showChildren={ i < count }
				/>
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
