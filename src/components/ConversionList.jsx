import React, { PropTypes } from 'react';
import Convert from './ConvertContainer';

const ConversionList = ({
	count,
	removeListItem,
}) => {
	const childElements = [];
	for (let i = 0; i < count + 1; i++) {
		let removeButton = null;
		if (i < count) {
			removeButton = (
				<button
					type="button"
					className="pt-button pt-minimal pt-icon-cross"
					onClick={ () => removeListItem(i) }
				>
					Remove
				</button>
			);
		}
		childElements.push(
			<div key={ i }>
				<div className="conversion-list-item-actions">
					{ removeButton }
				</div>
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
