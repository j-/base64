import React from 'react';
import PropTypes from 'prop-types';
import CopyToClipboard from 'react-copy-to-clipboard';
import Convert from '../containers/Convert';

const ConversionActionsContainer = (props) => (
	<div className="conversion-list-item-actions pt-form-group pt-inline" { ...props } />
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

const UTF8ConversionCheckbox = (props) => (
	<label className="pt-control pt-checkbox">
		<input type="checkbox" { ...props } />
		<span className="pt-control-indicator"></span>
		Use UTF8 encoding/decoding
	</label>
);

const ConversionActions = ({
	showChildren,
	removeListItem,
	valueText,
	valueBase64,
	useUtf8Conversion,
	setUtf8Conversion,
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
	const conversionCheckbox = (
		<UTF8ConversionCheckbox
			checked={useUtf8Conversion}
			onChange={setUtf8Conversion}
		/>
	);
	return (
		<ConversionActionsContainer>
			{ removeButton }
			{ copyTextButton }
			{ copyBase64Button }
			&nbsp;
			{ conversionCheckbox }
		</ConversionActionsContainer>
	);
};

ConversionActions.propTypes = {
	showChildren: PropTypes.bool,
	removeListItem: PropTypes.func.isRequired,
	valueText: PropTypes.string,
	valueBase64: PropTypes.string,
	useUtf8Conversion: PropTypes.bool,
	setUtf8Conversion: PropTypes.func.isRequired,
};

ConversionActions.defaultProps = {
	showChildren: true,
};

export default ConversionActions;
