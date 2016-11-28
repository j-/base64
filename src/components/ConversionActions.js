import React, { PropTypes } from 'react';
import Convert from './ConvertContainer';

const ConversionActionsContainer = (props) => (
	<div className="conversion-list-item-actions" { ...props } />
);

const RemoveButton = (props) => (
	<button
		type="button"
		className="pt-button pt-minimal pt-icon-cross"
		{ ...props }
	>
		Remove
	</button>
);

const ConversionActions = ({
	showChildren,
	removeListItem,
}) => {
	if (!showChildren) {
		// Return empty container
		return <ConversionActionsContainer />;
	}
	return (
		<ConversionActionsContainer>
			<RemoveButton onClick={ removeListItem } />
		</ConversionActionsContainer>
	);
};

ConversionActions.propTypes = {
	showChildren: PropTypes.bool,
	removeListItem: PropTypes.func.isRequired,
};

ConversionActions.defaultProps = {
	showChildren: true,
};

export default ConversionActions;
