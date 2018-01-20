import React from 'react';
import PropTypes from 'prop-types';
import Convert from '../containers/Convert';
import ConversionActions from '../containers/ConversionActions';

const ConversionList = ({
	count,
}) => {
	const childElements = [];
	for (let i = 0; i < count + 1; i++) {
		childElements.push(
			<div className="ConversionList-item" key={ i }>
				<ConversionActions
					index={ i }
					showChildren={ i < count }
				/>
				<Convert index={ i } />
			</div>
		);
	}
	return <div className="ConversionList">{ childElements }</div>;
};

ConversionList.propTypes = {
	count: PropTypes.number,
};

ConversionList.defaultProps = {
	count: 0,
};

export default ConversionList;
