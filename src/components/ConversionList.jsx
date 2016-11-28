import React, { PropTypes } from 'react';
import Convert from './ConvertContainer';
import ConversionActions from './ConversionActions';

const ConversionList = ({
	count,
	removeListItem,
}) => {
	const childElements = [];
	for (let i = 0; i < count + 1; i++) {
		childElements.push(
			<div key={ i }>
				<ConversionActions
					showChildren={ i < count }
					removeListItem={ () => removeListItem(i) }
				/>
				<Convert index={ i } />
			</div>
		);
	}
	return <div>{ childElements }</div>;
};

ConversionList.propTypes = {
	count: PropTypes.number,
	removeListItem: PropTypes.func.isRequired,
};

ConversionList.defaultProps = {
	count: 0,
};

export default ConversionList;
