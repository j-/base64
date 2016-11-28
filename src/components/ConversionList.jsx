import React, { PropTypes } from 'react';
import Convert from './ConvertContainer';

const RemoveButton = (props) => (
	<button
		type="button"
		className="pt-button pt-minimal pt-icon-cross"
		{ ...props }
	>
		Remove
	</button>
);

const ConversionList = ({
	count,
	removeListItem,
}) => {
	const childElements = [];
	for (let i = 0; i < count + 1; i++) {
		let removeButton = null;
		// If this is not the last item in the list
		if (i < count) {
			removeButton = <RemoveButton onClick={ () => removeListItem(i) } />;
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
