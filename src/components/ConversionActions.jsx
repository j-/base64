import React, { PropTypes } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import Convert from './ConvertContainer';

const ConversionActionsContainer = (props) => (
	<div className="conversion-list-item-actions" { ...props } />
);

const RemoveButton = (props) => (
	<button
		type="button"
		className="pt-button pt-minimal pt-icon-cross"
		{ ...props }
	/>
);

const CopyButton = (props) => (
	<button
		type="button"
		className="pt-button pt-minimal pt-icon-clipboard"
		{ ...props }
	/>
);

const ConversionActions = ({
	showChildren,
	removeListItem,
	valueText,
	valueBase64,
}) => {
	if (!showChildren) {
		// Return empty container
		return <ConversionActionsContainer />;
	}
	const removeButton = (
		<RemoveButton onClick={ removeListItem }>Remove</RemoveButton>
	);
	const copyTextButton = (
		valueText ?
			// Text is valid, enable copying
			<CopyToClipboard text={ valueText }>
				<CopyButton>Copy Text</CopyButton>
			</CopyToClipboard> :
			// Text is invalid, disable copying
			<CopyButton disabled>Copy Text</CopyButton>
	);
	const copyBase64Button = (
		valueBase64 ?
			// Base 64 is valid, enable copying
			<CopyToClipboard text={ valueBase64 }>
				<CopyButton>Copy Base64</CopyButton>
			</CopyToClipboard> :
			// Base 64 is invalid, disable copying
			<CopyButton disabled>Copy Base64</CopyButton>
	);
	return (
		<ConversionActionsContainer>
			{ removeButton }
			{ copyTextButton }
			{ copyBase64Button }
		</ConversionActionsContainer>
	);
};

ConversionActions.propTypes = {
	showChildren: PropTypes.bool,
	removeListItem: PropTypes.func.isRequired,
	valueText: PropTypes.string,
	valueBase64: PropTypes.string,
};

ConversionActions.defaultProps = {
	showChildren: true,
};

export default ConversionActions;
